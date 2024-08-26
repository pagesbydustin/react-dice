import { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container } from "react-bootstrap";

import SettingsOverlay from "./assets/componenents/SettingsOverlay";
import Helper from "./assets/utils/Helper";

import "./App.css";
import "./assets/bootstrap.css";

/**
 * @component App
 * No props found for this component.
 */
function App() {
  const Helps = new Helper(); //Helper Class initiation

  /**
   * Game Settings object is set based on existance of storage for gamerTag in the browser.
   */

  const [gameSettings, setGameSettings] = useState({
    gamerTag: "DragonSlayer123",
    persistantScore: false,
    timer: false,
  });

  const handleSettingsChange = (newSettings) => {
    setGameSettings(newSettings);
    localStorage.setItem(
      `${newSettings.gamerTag}-gameSettings`,
      JSON.stringify(newSettings)
    );
  };

  let newYValue = Helps.getRandomNumber(1, 4) * 100;
  let newXValue = Helps.getRandomNumber(0, 12) * 100;

  const [gameStarted, setGameStarted] = useState(
    sessionStorage.getItem("gameStarted") || true
  );

  //const [] = useContext();

  const [powerDieNumber, setPowerDieNumber] = useState(1);

  const [isRolling, setIsRolling] = useState(false);
  const [powerDieHome, setPowerDieHome] = useState({ x: 0, y: 0 });

  const props = useSpring({
    x: powerDieHome.x,
    y: powerDieHome.y,
    transform: isRolling
      ? `translate(1100px, ${newYValue}px) rotate(14400deg)`
      : `translate(${powerDieHome.x}px, ${powerDieHome.y}px) rotate(0deg)`,
    config: {
      mass: 6,
      tension: 1450,
      friction: 1000,
      duration: Helps.getRandomNumber(300, 1500),
    },
  });

  function handleDiceRoll(e) {
    setPowerDieNumber(0);

    setIsRolling(true);
    const newDieNumber = Helps.getRandomNumber(1, 6);

    setTimeout(() => {
      setPowerDieNumber(newDieNumber);
      setIsRolling(false);
    }, 600);

    return newDieNumber;
  }

  /* function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 */
  return (
    <>
      <Container
        hidden={gameStarted ? false : true}
        className="text-center mb-1 mt-1 p-2 bg-black rounded-5 bg-opacity-75"
        width={"1280px"}
      >
        <h1 className="text-white">Roll The Die</h1>
        <p>Drag to the right and let go to roll the die!</p>
      </Container>
      <Container
        hidden={gameStarted ? false : true}
        className="container-fluid bg-black bg-opacity-75 rounded-5 p-3"
        id="diceTable"
      >
        <animated.img
          style={props}
          draggable={true}
          src={`/dice/die${powerDieNumber}.svg`}
          className="die"
          alt="die logo ${powerDieNumber}"
          onDrag={handleDiceRoll}
        />
      </Container>
      <SettingsOverlay onSettingsChange={handleSettingsChange} />
    </>
  );
}

export default App;
