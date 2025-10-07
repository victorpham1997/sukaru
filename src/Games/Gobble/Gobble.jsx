import { useState, useEffect } from "react";
import Board from "./components/Board";
import { checkWinner } from "./utils/CheckWinner";

function Gobble() { 
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);
  const [result, setResult] = useState(null);

  const handleSquareClick = (index) => {
    if (board[index] || result) return;
    const newBoard = [...board];
    newBoard[index] = isTurn ? "×" : "○";
    setBoard(newBoard);
    setIsTurn(!isTurn);
  };

useEffect(() => {
  const winner = checkWinner(board);
  if (winner) {
    setResult(winner === "draw" ? "引き分け" : `勝者は ${winner} です！`);
  }
}, [board]);


  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsTurn(true);
    setResult(null);
  };


  return (
    <>
      <h1>○×ゲーム</h1>
      <Board board={board} onSquareClick={handleSquareClick} />
      {result && (
        <>
          <p>{result}</p>
          <button onClick={handleReset}>リセット</button>
        </>
      )}
    </>
  );
}

export default Gobble;