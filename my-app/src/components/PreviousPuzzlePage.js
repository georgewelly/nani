import {puzzle} from '../data'
import {Link} from "react-router-dom";

function PreviousPuzzlePage() {

  // websiteLaunchDate, when the website is launched. 
  // (One puzzle is released per day)
  const websiteLaunchDate = new Date("2023-05-24T00:00:00");
  let timeDifferenceInMilliseconds = Date.now() - websiteLaunchDate;
  let timeDifferenceInDays = timeDifferenceInMilliseconds/(1000*60*60*24);

  // puzzlesShown = days since the website has launched rounded up
  let puzzlesShown = Math.ceil(timeDifferenceInDays);
  // Release one puzzle per day
  let releasedPuzzles = puzzle.slice(0,puzzlesShown);

  const puzzleList = releasedPuzzles.map((puzzle, index) =>{
    // The +1 is to make sure 
    // the position 0 on the array, generates the query: "/?puzzle=1"
    let query = "/?puzzle=" + (index+1).toString();
    return(
      <>
        <p className="date">Puzzle #{index+1}</p>
        {/* <button className="playButton">Play</button> */}
        <Link to={query}>Play</Link>
      </>
    )}
  );

  return (
    <>
        <Link 
          to={"/?puzzle=" + releasedPuzzles.length.toString()}
        >
          Play today's puzzle
        </Link>
        <div className="dateGrid">
          {puzzleList}
        </div>
    </>
  );
}

export default PreviousPuzzlePage;
