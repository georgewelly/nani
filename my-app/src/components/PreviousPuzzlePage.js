import {puzzle} from '../data'

function PreviousPuzzlePage() {

  const puzzleList = puzzle.map((puzzle, index) =>
    <>
      <p className="date">Puzzle #{index}</p>
      <button className="playButton">Play</button>
    </>
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
