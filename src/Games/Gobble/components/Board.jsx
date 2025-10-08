import BoardSquare from "./BoardSquare";
import "./Board.css"

function Board({ board, onSquareClick}){
    return(
        <div className="board">
            {board.map((cell, index) => (

                <BoardSquare 
                key={index}
                pieces={cell}
                onClick={() => onSquareClick(index)}
                />
            ))}
        </div>
    )
}

export default Board;
