import { useState } from 'react';
import './App.css';

function App() {
  // Current image shown
  const [imageIndex, setIndex] = useState(0);

  // Current guess
  const [guessIndex, setguessIndex] = useState(0);

  let correctAnswer = "hi";

  let images = [
    "https://www.gamespot.com/a/uploads/original/1603/16030002/4111613-mha-01.png",
    "https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg",
    "https://cdn.animenewsnetwork.com/thumbnails/crop900x350gG9/cms/news.6/198178/977481.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWV-5BONoDY0aqXr0qBWjnNvk4DIbDAH62Ow&usqp=CAU",
    "https://nationaltoday.com/wp-content/uploads/2021/12/Anime-Day-1200x834.jpg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg"
  ];

  function changeImageIndex(number) {
    setIndex(number);
  }

  // When you guess wrong, it advances the guess by 1 (and changes the image to the newest revealed image)
  function advanceGuess() {
    setguessIndex(guessIndex + 1);
    changeImageIndex(guessIndex + 1);
  }

  // Render Numbered Buttons
  let screenshotNumberButtonArray = [];
  for (let i = 0; i < 6; i++) {
    let onClickVaule;
    let classNames = "";
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
    }else{
      // For images not unlocked
      classNames = classNames + " disabled";
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

    }else{
      console.log("fail");
      advanceGuess();
    }
  }


  return (
    <div className="App">
      <div className="mainContainer">
        <div className="topBar">
          <div>
            Guess the stuff
          </div>
          <div>
            icons
          </div>
        </div>
        <p>Anime Number</p>
        <div className="pictureContainer">
          <img 
            src={images[imageIndex]}
          />
        </div >
        <div className="screenshotNumberAndSkipContainer">
          <div className="screenshotNumberContainer">
            {screenshotNumberButtonArray}
          </div>
          <div>Skip</div>
        </div>
        <div>
          <form 
            onSubmit={handleSubmit}
          >
            <input type="text" id="guess" name="guess"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
