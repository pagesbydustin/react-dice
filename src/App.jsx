import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Col, Container, Row, Spinner } from "react-bootstrap";

import SettingsOverlay from "./assets/componenents/SettingsOverlay";
import Helper from "./assets/utils/Helper";
import Game from "./assets/utils/Game";

import "./App.css";
import "./assets/bootstrap.css";
import DescriptionComponent from "./assets/componenents/DescriptionComponent";

function App() {
  const GameInit = new Game();

  const Helps = new Helper(); //Helper Class initiation

  const [gameSettings, setGameSettings] = useState({
    gamerTag: "DragonSlayer123",
    persistantScore: false,
    timer: false,
  });

  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading delay (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  /**
   * When settings change this handles the save to storage
   *
   * @param {Object} newSettings
   */
  const handleSettingsChange = (newSettings) => {
    setGameSettings(newSettings);
    localStorage.setItem(
      `${newSettings.gamerTag}-gameSettings`,
      JSON.stringify(newSettings)
    );
  };

  let newYValue = Helps.getNewYValue(1, 4);
  let newXValue = Helps.getNewXValue(0, 12);

  const [gameStarted, setGameStarted] = useState(
    sessionStorage.getItem("gameStarted") || true
  );

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

  return (
    <>
      {isLoading ? (
        // Show loading spinner while isLoading is true
        <Container className="text-center align-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <>
          <Container
            id="diceTableHeading"
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
          <Row className="p-2">
            <Col className="text-center align-content-center align-items-center">
              <SettingsOverlay onSettingsChange={handleSettingsChange} />
            </Col>
            <Col className="text-center align-content-center align-items-center">
              <DescriptionComponent />
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default App;
