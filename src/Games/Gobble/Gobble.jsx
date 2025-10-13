import { useState } from "react";
import Board from "./components/Board";
import { checkWinner } from "./utils/CheckWinner";
import Pieces from "./components/Pieces";

function Gobble() {
  // === 初期駒設定 ===
  const createPieces = (player) => [
    { size: 1, player },
    { size: 1, player },
    { size: 2, player },
    { size: 2, player },
    { size: 3, player },
    { size: 3, player },
  ];

  const initialBluePieces = createPieces("blue");
  const initialRedPieces = createPieces("red");

  // === 状態管理 ===
  const [board, setBoard] = useState(() => Array(9).fill(null).map(() => []));
  const [bluePieces, setBluePieces] = useState(initialBluePieces);
  const [redPieces, setRedPieces] = useState(initialRedPieces);
  const [isTurn, setIsTurn] = useState(true);
  const [result, setResult] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);

  // === 共通: 現在のプレイヤー取得 ===
  const currentPlayer = isTurn ? "blue" : "red";

  // === 駒選択関連 ===
  const handleSelectPiece = (piece) => {
    if (result || piece.player !== currentPlayer) return;
    setSelectedPiece(piece);
  };

  const handleSelectBoard = (index) => {
    if (result) return;

    const topPiece = board[index]?.[0];
    if (!topPiece || topPiece.player !== currentPlayer) return;

    setSelectedPiece(topPiece);
  };

  const handleDeselect = () => setSelectedPiece(null);

  // === 駒配置 ===
  const handlePlacePiece = (index) => {
    if (!selectedPiece || result) return;

    const topPiece = board[index]?.[0];
    if (topPiece && topPiece.size >= selectedPiece.size) return;

    const newBoard = [...board];

    // 元の位置から削除（ボード上の駒を動かす場合）
    const oldIndex = newBoard.findIndex((cell) => cell.includes(selectedPiece));
    if (oldIndex !== -1) {
      newBoard[oldIndex] = newBoard[oldIndex].filter((p) => p !== selectedPiece);
    }

    // 新しいマスへ配置（重ねる）
    newBoard[index] = [selectedPiece, ...newBoard[index]];
    setBoard(newBoard);

    // 手札から削除（手札→盤面への移動時のみ）
    if (selectedPiece.player === "blue") {
      setBluePieces((prev) => prev.filter((p) => p !== selectedPiece));
    } else {
      setRedPieces((prev) => prev.filter((p) => p !== selectedPiece));
    }

    setSelectedPiece(null);
    setResult(checkWinner(newBoard));
    setIsTurn(!isTurn);
  };

  // === リセット ===
  const handleReset = () => {
    setBoard(Array(9).fill(null).map(() => []));
    setBluePieces(initialBluePieces);
    setRedPieces(initialRedPieces);
    setIsTurn(true);
    setResult(null);
    setSelectedPiece(null);
  };

  // === UI ===
  return (
    <>
      <h1>○×ゲーム</h1>
      <p>{currentPlayer}のターン</p>

      <section>
        <p>○ blueの手札</p>
        <Pieces pieces={bluePieces} onSquareClick={handleSelectPiece} selectedPiece={selectedPiece}/>
      </section>

      <Board
        board={board}
        onSquareClick={
          selectedPiece ? handlePlacePiece : handleSelectBoard
        }
        selectedPiece={selectedPiece}
      />

      <section>
        <p>× redの手札</p>
        <Pieces pieces={redPieces} onSquareClick={handleSelectPiece} selectedPiece={selectedPiece}/>
      </section>

      {selectedPiece && (
        <>
          <p>
            {selectedPiece.player}の{selectedPiece.size}を選択中
          </p>
          <button onClick={handleDeselect}>選択解除</button>
        </>
      )}

      {result && (
        <>
          <p>{result}の勝利！</p>
          <button onClick={handleReset}>リセット</button>
        </>
      )}
    </>
  );
}

export default Gobble;
