import {puzzle} from '../data'

function PreviousPuzzlePage() {

  const puzzleList = puzzle.map(puzzle =>
    <>
      <p className="date">{puzzle.date}</p>
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
