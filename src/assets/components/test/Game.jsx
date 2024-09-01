import { Container, Button } from "react-bootstrap";
function Game({ updateGame }) {
  return (
    <Container fluid className="bg-body p-5">
      <div>
        <Button onClick={() => updateGame()}>End</Button>
      </div>
    </Container>
  );
}

export default Game;
