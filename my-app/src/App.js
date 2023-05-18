import logo from './logo.svg';
import './App.css';

function App() {
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
            src="https://www.gamespot.com/a/uploads/original/1603/16030002/4111613-mha-01.png"
          />
        </div >
        <div className="screenshotNumberAndSkipContainer">
          <div className="screenshotNumberContainer">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
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
