import { useState } from "react";
import dieLogo1 from "/die1.svg";
import dieLogo2 from "/die2.svg";
import dieLogo3 from "/die3.svg";
import dieLogo4 from "/die4.svg";
import dieLogo5 from "/die5.svg";
import dieLogo6 from "/die6.svg";

import "./App.css";

function App() {
  const [dieNumber, setDieNumber] = useState(1);

  function handleClicks(event) {
    const newDieNumber = getRandomNumber(1, 6);
    setDieNumber(newDieNumber);
    return newDieNumber;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <div>
        <img
          draggable={false}
          src={`/die${dieNumber}.svg`}
          className="logo"
          alt="die logo ${dieNumber}"
        />

        <img src={dieLogo1} className="logo" alt="die logo 1" />
      </div>
      <h1>die + React</h1>
      <div className="card">
        <button onClick={handleClicks}>die shows {dieNumber}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the die and React logos to learn more
      </p>
    </>
  );
}

export default App;
