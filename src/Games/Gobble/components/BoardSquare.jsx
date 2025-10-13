import "./BoardSquare.css";
import blue from "../img/blue.png";
import red from "../img/red.png";

function BoardSquare({ pieces, onClick , isSelected }) {
  const firstPiece = pieces[0]; // 一番上にある駒を取得

    const imgSrc = firstPiece
    ? firstPiece.player === "blue"
      ? blue
      : red
    : null;
  

  return (
    <button className={`board-square ${isSelected ? "selected" : ""}`} onClick={onClick}>
      {firstPiece && (
        <img
          src={imgSrc}
          alt={`${firstPiece.player}-${firstPiece.size}`}
          className={`board-piece-image size-${firstPiece.size}`}
        />
      )}
    </button>
  );
}

export default BoardSquare;
