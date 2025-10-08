function BoardSquare({ pieces, onClick }) {
const firstPiece = pieces[0]; 
  return (
    <button className="square" onClick={onClick}>
      {firstPiece
        ? `${firstPiece.player === "blue" ? "○" : "×"}${firstPiece.size}`
        : null}
    </button>
  )
}

export default BoardSquare;