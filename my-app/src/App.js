import './App.css';
import TopBar from './components/TopBar';
import GuessPage from './components/GuessPage';
import PreviousPuzzlePage from './components/PreviousPuzzlePage';
import VerticalAd1 from './components/ads/VerticalAd1';
import VerticalAd2 from './components/ads/VerticalAd2';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  // Show google ads if screen bigger than a certain amount
  const [verticalAd1IsShown, setVerticalAd1IsShown] = useState(window.innerWidth < 640 ? false : true);
  const [verticalAd2IsShown, setverticalAd2IsShown] = useState(window.innerWidth < 800 ? false : true);

  useEffect(() => {
    // Code here will run after *every* render
    const handleResize = ()=>{
      if(window.innerWidth < 640){
        setVerticalAd1IsShown(false);
        setverticalAd2IsShown(false);     
      }else if(window.innerWidth < 800){
        setVerticalAd1IsShown(true);
        setverticalAd2IsShown(false);
      }else{
        setVerticalAd1IsShown(true);
        setverticalAd2IsShown(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return()=>{
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  

  return (
    <div className="App">
      {verticalAd1IsShown ? <VerticalAd1/> : ""}
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
      {verticalAd2IsShown ? <VerticalAd2/> : ""}
    </div>
  );
}

export default App;
