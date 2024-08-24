import { useState } from "react";
import { Button, Card, Col, Offcanvas, Row } from "react-bootstrap";
import Helper from "../utils/Helper";

function SettingsLayout() {
  const [show, setShow] = useState(true);
  const [randomNumber, setRandomNumber] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const helps = new Helper();
  console.log(helps.getRandomNumber({ min: 6, max: 10 }));
  const [gameSettings, setGameSettings] = useState({
    displayName: `Dragon Killer ${helps.getRandomNumber({ min: 3, max: 25 })}`,
  });

  return (
    <>
      <Offcanvas
        className={"d-flex"}
        keyBoard={true}
        show={show}
        onHide={handleShow}
      >
        <Card>
          <Card.Header closebutton>
            <Card.Title>Hello {gameSettings.displayName}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>Show this one</Col>
              <Col>Show this as well</Col>
            </Row>
          </Card.Body>
        </Card>
      </Offcanvas>
      <Button variant="primary" onClick={handleShow}>
        Open Settings
      </Button>
    </>
  );
}

export default SettingsLayout;
