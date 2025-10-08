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
    // それぞれのマスの一番上の駒を取得（空なら undefined）
    const topA = board[a]?.[0];
    const topB = board[b]?.[0];
    const topC = board[c]?.[0];

    // いずれかが空ならスキップ
    if (!topA || !topB || !topC) continue;

    // 3つの駒がすべて同じプレイヤーなら勝ち
    if (topA.player === topB.player && topA.player === topC.player) {
      return topA.player;
    }
  }
  return null; // 勝者なし
}
