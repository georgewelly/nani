import { useState } from 'react';
import {puzzle} from '../data';

function GuessPage() {
  // Current image shown
  const [imageIndex, setIndex] = useState(0);

  // Current guess
  const [guessIndex, setguessIndex] = useState(0);

  // Index of the guess which is correct (-1 means user has not guessed correctly)
  const [correctGuessIndex, setcorrectGuessIndex] = useState(-1);

  // _______________________________________________________________________

  // Fake data section

  // Get the URL query.
  // ...?puzzle=... <- the value of the puzzle key will be the index of the puzzle loaded
  // const queryString = window.location.search;
  // const searchParams = new URLSearchParams(queryString);
  // let puzzleNumber =  parseInt(searchParams.get("puzzle"));

  // // TODO: Handle if query is not present or is a string or something 
  // // VVV For some reason putting this in an if statement crashes... VVV
  // let correctAnswer = puzzle[puzzleNumber-1].answer;
  // let images = puzzle[puzzleNumber-1].images;


  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  let puzzleNumber = parseInt(searchParams.get("puzzle"));
  
  if (Number.isNaN(puzzleNumber) || puzzleNumber === 0) {
    // Handle the case when the puzzle number is not a valid integer
    console.error("Invalid puzzle number");
    console.error("Defaulted to the oldest puzzle");

    // Todo: Redirect to newest puzzle which has been released

    // You can provide a default value or take appropriate action
    puzzleNumber = 1; // Assuming 0 is an invalid puzzle number
  }
  
  let correctAnswer = puzzle[puzzleNumber - 1].answer;
  let images = puzzle[puzzleNumber - 1].images;

  // _______________________________________________________________________
  // Functions

  function changeImageIndex(number) {
    setIndex(number);
  }

  // When you guess wrong, it advances the guess by 1 (and changes the image to the newest revealed image)
  function advanceGuess() {
    setguessIndex(guessIndex + 1);

    // Weird because guess index doesn't update until the function is finished?
    // If statement is there because you don't want it to show a image index for an image that isn't there
    if(guessIndex + 1 < images.length){
      changeImageIndex(guessIndex + 1);
    }
  }

  // Function that runs when a guess is made
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    if(formJson.guess == correctAnswer){
      console.log("correct");
      setcorrectGuessIndex(guessIndex);
    }else{
      console.log("fail");
      advanceGuess();
    }
  }

  // _______________________________________________________________________
  // Rendering components that change with logic

  // Render Numbered Buttons
  let screenshotNumberButtonArray = [];
  for (let i = 0; i < 6; i++) {
    let onClickVaule;
    let classNames = "";

    // currently Selected image
    if(i === imageIndex){
      classNames = classNames + "SelectedNumber";
    }

    if(i < guessIndex){
      // For images previously revealed and guessed wrong
      classNames = classNames + " wrong";
      onClickVaule = ()=>{changeImageIndex(i)};
    }else if(i === guessIndex){
      // Button for the latest revealed image
      onClickVaule = ()=>{changeImageIndex(i)};
      if(correctGuessIndex !== -1){
        // If user has already guessed correctly, latest guess shows green
        classNames = classNames + " correct";
      }
    }else{
      // For images not unlocked

      if(correctGuessIndex === -1){
        // If user has not guessed correctly, latest guess shows green
        classNames = classNames + " disabled";
      }else{
        onClickVaule = ()=>{changeImageIndex(i)};
      }
    }

    screenshotNumberButtonArray.push(
      <button 
        // Classname changes depending on if the current image index is the same as the button
        className={classNames}
        onClick={onClickVaule}
      >
        {i+1}
      </button>
    );
  }

  
  // Show either: 
    // - Form for user to guess an answer, 
    // - Congrats message and anser, 
    // - Condolences... here is the correct answer
  let formCongratsOrCondolences;
  let skipButton;
  if(correctGuessIndex === -1){
    // User has not guessed correctly yet
    if(guessIndex < 6){
      // User still has guesses
      formCongratsOrCondolences = <>
          <form 
            onSubmit={handleSubmit}
          >
            <input type="text" id="guess" name="guess"/>
            <input type="submit" value="Submit"/>
          </form>
      </>
      skipButton = <>
        <button 
          onClick={advanceGuess}
        >
          Skip
        </button>
      </>
    }else{
      // User has no guesses left
      formCongratsOrCondolences = <p>Condolences, the answer is {correctAnswer}</p>
    }
  }else{
    formCongratsOrCondolences = <p>Yee! The answer is {correctAnswer}</p>
  }


  return (
    <>
      <p>Puzzle Number #{puzzleNumber}</p>
      <div className="pictureContainer">
          <img 
          src={images[imageIndex]}
          />
      </div >
      <div className="screenshotNumberAndSkipContainer">
          <div className="screenshotNumberContainer">
          {screenshotNumberButtonArray}
          </div>
          {skipButton}
      </div>
      <div>
          {formCongratsOrCondolences}
      </div>
    </>
  );
}

export default GuessPage;
