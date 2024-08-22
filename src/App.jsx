import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import "./App.css";
import "./assets/bootstrap.css";

function App() {
  let newYValue = getRandomNumber(-50, -300);
  let newXValue = getRandomNumber(-50, -200);

  const [dieNumber, setDieNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [powerDieHome, setPowerDieHome] = useState({ x: 100, y: 100 });
  console.log(powerDieHome.x);

  const props = useSpring({
    transform: isRolling
      ? `translate(${newXValue}px, ${newYValue * 2}px) rotate(1200deg)`
      : `translate(${newXValue}px, ${newYValue * 2}px) rotate(0deg)`,
    config: {
      mass: 6,
      tension: 1450,
      friction: 1000,
      duration: getRandomNumber(300, 1500),
    },
  });

  function handleDiceRoll(e) {
    console.log(e.target);

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
      <Container
        className="container-fluid bg-black bg-opacity-75 rounded-5 p-3"
        id="diceTable"
      >
        <h1 className="text-white ">Roll The Die</h1>
        <div>
          <Row variant="secondary text-center align-middle">
            <Col className="align-middle">
              <p>Drag to the right and let go to roll the die!</p>
            </Col>
          </Row>
        </div>
      </Container>
      <div style={{ position: "unset" }}>
        <animated.img
          style={props}
          draggable={true}
          src={`/dice/die${dieNumber}.svg`}
          className="logo"
          alt="die logo ${dieNumber}"
          onDrag={handleDiceRoll}
        />
      </div>
    </>
  );
}

export default App;
