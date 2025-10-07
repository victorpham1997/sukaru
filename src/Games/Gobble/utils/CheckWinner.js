// src/utils/CheckWinner.js
export function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 勝者（"×" または "○"）
    }
  }
  if(board.every(cell => cell !== null)){
    return "draw"
  }
  return null; // 勝者なし
}
