import { useState } from "react";
import { Container } from "react-bootstrap";
import DieComponent from "./DieComponent";
import { animated } from "react-spring";

function DieTableComponent(props) {
  let properties = { ...props };
  return (
    <>
      <Container
        className="text-center mb-1 mt-1 bg-black rounded-5 bg-opacity-75"
        width={"1280px"}
      >
        <h1 className="text-white">Roll The Die</h1>
        <p>Drag to the right and let go to roll the die!</p>
      </Container>

      <Container
        className="container-fluid bg-black bg-opacity-75 rounded-5 p-3"
        id="diceTable"
      >
        <DieComponent Die={properties.dice} />
      </Container>
    </>
  );
}

export default DieTableComponent;
