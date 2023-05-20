import './App.css';
import GuessPage from './GuessPage';
import PreviousPuzzlePage from './PreviousPuzzlePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">    
      <BrowserRouter>
        <Routes>
          <Route index element={<GuessPage/>} />
          <Route path="/previous" element={<PreviousPuzzlePage />} />
          {/* Todo Write an error page */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
