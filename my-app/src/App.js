import './App.css';
import TopBar from './components/TopBar';
import GuessPage from './components/GuessPage';
import PreviousPuzzlePage from './components/PreviousPuzzlePage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
