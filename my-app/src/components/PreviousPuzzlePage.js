import {puzzle} from '../data'
import {Link} from "react-router-dom";

function PreviousPuzzlePage() {

  // Todo, reveal one puzzle per day

  const puzzleList = puzzle.map((puzzle, index) =>{
    // The +1 is to make sure 
    // the position 0 on the array, generates the query: "/?puzzle=1"
    let query = "/?puzzle=" + (index+1).toString();
    return(
      <>
        <p className="date">Puzzle #{index}</p>
        {/* <button className="playButton">Play</button> */}
        <Link to={query}>Play</Link>
      </>
    )}
  );

  return (
    <>
        <button>Play today's puzzle</button>
        <div className="dateGrid">
          {puzzleList}
        </div>
    </>
  );
}

export default PreviousPuzzlePage;
