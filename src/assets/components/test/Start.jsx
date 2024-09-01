import { Button, Container } from "react-bootstrap";

function Start({ updateGame }) {
  return (
    <Container fluid className="bg-body p-5 bg-opacity-50">
      <div>
        <Button onClick={() => updateGame()}>Start</Button>
      </div>
    </Container>
  );
}

export default Start;
