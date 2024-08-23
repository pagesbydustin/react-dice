import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function ScoreBoardComponent({ name }) {
  // Initialize player with default values
  const [player, setPlayer] = useState({ name: name, score: 0 });
  const [score, setScore] = useState(0); // Use state for total score

  // Update score function (optional)
  const updateScore = (delta) => {
    setScore(score + delta); // Update total score
  };

  return (
    <>
      <Container className="container-fluid">
        <h1 className="text-center">Scoreboard</h1>
        <hr className="w-100" />
        <Row as="h3">
          <Col>{player.name} - </Col>
          <Col>{score}</Col>
        </Row>
      </Container>
    </>
  );
}

export default ScoreBoardComponent;
