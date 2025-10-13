import BoardSquare from "./BoardSquare";
import "./Board.css"

function Board({ board, onSquareClick, selectedPiece }) {
  return (
    <div className="board">
      {board.map((cell, index) => {
        const topPiece = cell[0]; // 一番上の駒（存在しない場合は undefined）

        return (
          <BoardSquare
            key={index}
            pieces={cell}
            onClick={() => onSquareClick(index)}
            isSelected={selectedPiece && topPiece === selectedPiece}
          />
        );
      })}
    </div>
  );
}

export default Board;
