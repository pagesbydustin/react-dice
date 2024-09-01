import { Container } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import "./assets/bootstrap.css";

function App() {
  const [userSelected, setUserSelected] = useState(false);

  return (
    <>
      {userSelected} ? <Container id="gameContainer">Game</Container>:
      <Container id="prepContainer">Setting user data</Container>
    </>
  );
}

export default App;
