import { useState } from 'react';

function TopBar() {
  const [howToPlayShown, setHowToPlayShown] = useState(0);
  
  function toggleHowToPlay(){
    setHowToPlayShown(!howToPlayShown);
  }

  const howToPlayJSX = (
    <div className="howToPlayPopUp">
      How To Play
      <br/><br/>
      You will see a cropped picture of a Pokemon, (the image can be rotated with other visual effects applied).
      <br/>
      You have to guess which Pokemon it is. 
      <br/>
      Every incorrect guess or skip reveals the next image of the same Pokemon.
      <br/>
      You have 6 images to guess the correct Pokemon!
      <br/>
      Good luck!
      <button 
        className="howToPlayPopUpCloseButton"
        onClick={toggleHowToPlay}
      >x</button>
    </div>
  );


  return (
    <>
      <div className="topBar">
          <div>
              Who's that Pokemon?
          </div>
          <div onClick={toggleHowToPlay}>
              How to play
          </div>
      </div>
      {howToPlayShown?howToPlayJSX:""}
    </>
  );
}

export default TopBar;




