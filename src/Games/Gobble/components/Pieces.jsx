import PieceSquare from "./PieceSquare";

function Pieces({ pieces, onSquareClick}){
    return(
        <div className="iece">
            {pieces.map((value, index) => (

                <PieceSquare 
                key={index}
                value={value.size}
                onClick={() => onSquareClick(value)}
                />
            ))}
        </div>
    )
}

export default Pieces;
