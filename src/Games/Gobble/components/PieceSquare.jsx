import "./PieceSquare.css"
import blue from "../img/blue.png";
import red from "../img/red.png";

function PieceSquare({ value, onClick, isSelected }){

  const imgSrc = value.player === "blue" ? blue : red;

  return (
    <button className={`piece-square ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <img
        src={imgSrc}
        alt={`${value.player}-${value.size}`}
        className={`piece-image size-${value.size}`}
      />
    </button>
  );
}

export default PieceSquare;