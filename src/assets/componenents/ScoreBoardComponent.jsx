import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function ScoreBoardComponent({ name, scoreInput }) {
  // Initialize player with default values
  const [player, setPlayer] = useState({ name: name || "DragonSlayer2024" });
  const [score, setScore] = useState(scoreInput); // Use state for total score

  // Update score function (optional)
  const updateScore = (points) => {
    setScore(score + points); // Update total score
  };

  return (
    <>
      <Container className="container-fluid scoreboardContainer">
        <h1 className="text-center">Scoreboard</h1>
        <hr className="w-100" />
        <Row>
          <Col as="h3" className="alignRight">
            {player.name} -{" "}
          </Col>
          <Col as="h3">{score}</Col>
        </Row>
      </Container>
    </>
  );
}

export default ScoreBoardComponent;
