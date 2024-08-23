import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import "./App.css";
import "./assets/bootstrap.css";

function App() {
  let newYValue = getRandomNumber(-50, 400);
  let newXValue = getRandomNumber(-600, 600);

  const [dieNumber, setDieNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [powerDieHome, setPowerDieHome] = useState({ x: 0, y: 0 });

  const props = useSpring({
    x: powerDieHome.x,
    y: powerDieHome.y,
    transform: isRolling
      ? `translate(${newXValue}px, ${newYValue}px) rotate(1200deg)`
      : `translate(${newXValue}px, ${newYValue}px) rotate(0deg)`,
    config: {
      mass: 6,
      tension: 1450,
      friction: 1000,
      duration: getRandomNumber(300, 1500),
    },
  });

  function handleDiceRoll(e) {
    console.log(newXValue, newYValue);

    setDieNumber(0);

    setIsRolling(true);
    const newDieNumber = getRandomNumber(1, 6);

    setTimeout(() => {
      setDieNumber(newDieNumber);
      setIsRolling(false);
    }, 600);

    return newDieNumber;
  }
  const handleRollDirection = (e) => {
    console.log(e.target);
  };

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <Container className="mb-1 container-fluid">
        <Row className="bg-black bg-opacity-75 rounded-5 align-middle text-center">
          <Col className="align-middle">
            <h1 className="text-white">Roll The Die</h1>
            <p>Drag to the right and let go to roll the die!</p>
          </Col>
        </Row>
      </Container>

      <Container
        className="container-fluid bg-black bg-opacity-75 rounded-5 p-3"
        id="diceTable"
      >
        <div style={{ position: "relative" }}>
          <animated.img
            style={props}
            draggable={true}
            src={`/dice/die${dieNumber}.svg`}
            className="logo"
            alt="die logo ${dieNumber}"
            onDrag={handleDiceRoll}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
