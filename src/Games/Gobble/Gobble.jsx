import { useState, useEffect } from "react";
import Board from "./components/Board";
import { checkWinner } from "./utils/CheckWinner";
import Pieces from "./components/Pieces";


function Gobble() { 
  const initialBluePieces = [
  { size: 1, player: "blue" },
  { size: 1, player: "blue" },
  { size: 2, player: "blue" },
  { size: 2, player: "blue" },
  { size: 3, player: "blue" },
  { size: 3, player: "blue" },
];
  const initialRedPieces = [
  { size: 1, player: "red" },
  { size: 1, player: "red" },
  { size: 2, player: "red" },
  { size: 2, player: "red" },
  { size: 3, player: "red" },
  { size: 3, player: "red" },
];

  const [board, setBoard] = useState(() => Array(9).fill(null).map(() => []));
  const [bluePieces, setBluePieces] = useState(initialBluePieces);
  const [redPieces, setRedPieces] = useState(initialRedPieces);
  const [isTurn, setIsTurn] = useState(true);
  const [result, setResult] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);

  //add select piece
  const handleSelectBoard = (index) => {

    const currentPlayer = isTurn ? "blue" : "red"
    const topPiece = board[index]?.[0];
    if (result) return;
    //is topPiece
    if (!topPiece) return;
    //is topPiece player
    if(topPiece.player != currentPlayer) return;
    setSelectedPiece(topPiece);   
  };


  const handleSelectPiece = (piece) => {
    const currentPlayer = isTurn ? "blue" : "red";
    if (result) return;
    if (piece.player !== currentPlayer) return;
    setSelectedPiece(piece);
  };

  //remove select piece
  const handleDeselect = () => {
    setSelectedPiece(null);
  };


  const handlePlacePiece = (index) => {

    const topPiece = board[index]?.[0];
    if (result) return;
    if (topPiece && topPiece.size >= selectedPiece.size) return;
    const newBoard = [...board];
    
    // 元のマスから駒を削除（ボード上の駒を移動する場合）
    const oldIndex = newBoard.findIndex(cell => cell.includes(selectedPiece));
    if (oldIndex !== -1) {
      newBoard[oldIndex] = newBoard[oldIndex].filter(p => p !== selectedPiece);
    }
    
    // 新しいマスに駒を追加（重ねる）
    newBoard[index] = [selectedPiece, ...newBoard[index]];
    if (selectedPiece.player === "blue") {
      setBluePieces(prev => prev.filter(p => p !== selectedPiece));
    } else {
      setRedPieces(prev => prev.filter(p => p !== selectedPiece));
    }
    setBoard(newBoard);
    setSelectedPiece(null);
    setResult(checkWinner(newBoard));
    setIsTurn(!isTurn);

  };

  const handleReset = () => {
    setBoard(Array(9).fill(null).map(() => []));
    setIsTurn(true);
    setResult(null);
    setRedPieces(initialRedPieces);
    setBluePieces(initialBluePieces)
  };


  return (
    <>
      <h1>○×ゲーム</h1>
      <p>{isTurn ? "blue" : "red"}のターン</p>
      <p>○ blueの手札</p>
      <Pieces pieces={bluePieces} 
        onSquareClick={handleSelectPiece} />
      <p></p>
      <Board board={board} 
        onSquareClick={
          selectedPiece
          ? handlePlacePiece   // 駒を選択中なら「置く」動作
          : handleSelectBoard  // 駒未選択なら「選ぶ」動作
        }
    />
      <p>× redの手札</p>
      <Pieces pieces={redPieces} onSquareClick={handleSelectPiece} />
      {selectedPiece && (
        <>
        <p>{selectedPiece.size}を選択中</p>
        <button onClick={handleDeselect}>選択解除</button>
        </>
      )}
      {result && (
        <>
          <p>{result}の勝利</p>
          <button onClick={handleReset}>リセット</button>
        </>
      )}
    </>
  );
}

export default Gobble;