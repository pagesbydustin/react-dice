import { useState } from "react";
import { useSpring, animated } from "react-spring";
import dieLogo1 from "/die1.svg";
import dieLogo2 from "/die2.svg";
import dieLogo3 from "/die3.svg";
import dieLogo4 from "/die4.svg";
import dieLogo5 from "/die5.svg";
import dieLogo6 from "/die6.svg";

import "./App.css";

function App() {
  const [dieNumber, setDieNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const props = useSpring({
    transform: isRolling ? "rotate(360deg)" : "rotate(0deg)",
    config: { mass: 4, tension: 80, friction: 50, duration: 300 },
  });

  function handleClicks(event) {
    setIsRolling(true);
    const newDieNumber = getRandomNumber(1, 6);
    setTimeout(() => {
      setDieNumber(newDieNumber);
      setIsRolling(false);
    }, 300); // Adjust the duration as needed
    return newDieNumber;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <div>
        <animated.img
          style={props}
          draggable={false}
          src={`/die${dieNumber}.svg`}
          className="logo"
          alt="die logo ${dieNumber}"
        />
      </div>
      <h1>die + React</h1>
      <div className="card">
        <button onClick={handleClicks}>die shows {dieNumber}</button>
      </div>
    </>
  );
}

export default App;
