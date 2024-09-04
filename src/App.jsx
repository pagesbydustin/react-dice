import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

import useLocalStorageState from "use-local-storage-state";

import SettingsOverlay from "./assets/componenents/SettingsOverlay";
import Helper from "./assets/utils/Helper";
/*import Game from "./assets/utils/Game";*/

import "./App.css";
import "./assets/bootstrap.css";
import DescriptionComponent from "./assets/componenents/DescriptionComponent";
import DieComponent from "./assets/componenents/DieComponent";
import DieTableComponent from "./assets/componenents/DieTableComponent";

function App() {
  /*const GameInit = new Game();*/

  const Helps = new Helper(); //Helper Class initiation

  const [gameSettings, setGameSettings] = useLocalStorageState({
    gamerTag: "DragonSlayer123",
    persistantScore: false,
    timer: false,
  });

  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  const [gamerTag, setGamerTag] = useState();

  function handleGamerTagInit(e) {
    e.preventDefault();
    let gTag = e.target.gamerTagInput.value;
    setGamerTag(gTag);
    setGameStarted(!gameStarted);
    setIsLoading(!isLoading);
  }

  useEffect(() => {
    console.log("Gamer Tag: %s", gamerTag);
  }, [gamerTag]);

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
          <Container fluid>
            <Card>
              <Card.Header>What is your Gamer Tag?</Card.Header>
              <Card.Body>
                <Form onSubmit={handleGamerTagInit}>
                  <Row>
                    <Col>
                      <Form.Control
                        name="gamerTagInput"
                        type="input"
                        placeholder="Gamer Tag"
                      />
                    </Col>
                    <Col lg={2}>
                      <Button type="submit">Start Game</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Container>
      ) : (
        <>
          {/* <Container
            id="diceTableHeading"
            hidden={gameStarted ? true : false}
            className="text-center mb-1 mt-1 p-2 bg-black rounded-5 bg-opacity-75"
            width={"1280px"}
          >
            <h1 className="text-white">Roll The Die</h1>
            <p>Drag to the right and let go to roll the die!</p>
          </Container>
          <Container
            hidden={gameStarted ? true : false}
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
          </Container> */}
          <DieTableComponent
            dice={
              <animated.img
                style={props}
                draggable={true}
                src={`/dice/die${powerDieNumber}.png`}
                className="die"
                alt="die logo ${powerDieNumber}"
                onDrag={handleDiceRoll}
              />
            }
          />
          <Row className="p-2">
            <Col className="text-center align-content-center align-items-center">
              <SettingsOverlay
                onSettingsChange={handleSettingsChange}
                gamerTag={gamerTag}
              />
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
