import PieceSquare from "./PieceSquare";
import "./Pieces.css"


function Pieces({ pieces, onSquareClick, selectedPiece }){
    return(
        <div className="iece">
            {pieces.map((value, index) => (

                <PieceSquare 
                key={index}
                value={value}
                onClick={() => onSquareClick(value)}
                isSelected={selectedPiece === value}
                />
            ))}
        </div>
    )
}

export default Pieces;
