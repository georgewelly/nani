import './App.css';
import TopBar from './components/TopBar';
import GuessPage from './components/GuessPage';
import PreviousPuzzlePage from './components/PreviousPuzzlePage';
import VerticalAd1 from './components/ads/VerticalAd1';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  // Show google ads if screen bigger than a certain amount

  return (
    <div className="App">
      <VerticalAd1/>
      <div className="mainContainer">
        <TopBar/>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<GuessPage/>} />
            <Route path="/previous" element={<PreviousPuzzlePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <VerticalAd1/>
    </div>
  );
}

export default App;
