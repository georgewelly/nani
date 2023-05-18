import { useState } from 'react';
import './App.css';

function App() {
  const [imageIndex, setIndex] = useState(0);

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

  // Render Numbered Buttons
  let screenshotNumberButtonArray = [];
  for (let i = 0; i < 6; i++) {
    screenshotNumberButtonArray.push(
      <button 
        // Classname changes depending on if the current image index is the same as the button
        className={i === imageIndex ? "SelectedNumber": ""}
        onClick={()=>{changeImageIndex(i)}}
      >
        {i+1}
      </button>
    );
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
          <form action="/action_page.php">
            <input type="text" id="guess" name="guess"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
