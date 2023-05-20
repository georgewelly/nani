import './App.css';
import TopBar from './components/TopBar';
import GuessPage from './components/GuessPage';
import PreviousPuzzlePage from './components/PreviousPuzzlePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div className="mainContainer">
        <TopBar/>
        <BrowserRouter>
          <Routes>
            <Route index element={<GuessPage/>} />
            <Route path="/previous" element={<PreviousPuzzlePage />} />
            {/* Todo Write an error page */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
