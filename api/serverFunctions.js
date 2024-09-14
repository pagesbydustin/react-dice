export const player1 = (() => {
  return { name: "Dodo", age: 42, sex: "M" };
})();

export function oldCode() {
  {
    return (
      <>
        <Container
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
        </Container>
      </>
    );
  }
}
