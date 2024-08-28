import { useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import DataFile from "../data/RulesAndSettingsData.json";
function DescriptionComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="dark" onClick={handleOpen}>
        Open rules and settings desciption
      </Button>
      <Offcanvas id="OCDescription" className="w-50" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{DataFile.GameName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Rules</h3>

          <Container fluid>
            <Row fluid className="fw-bold">
              Dice
              <hr />
            </Row>
            <Row fluid>{DataFile.Rules["Dice"]}</Row>
          </Container>
          <br />
          <Container fluid>
            <Row fluid className="fw-bold">
              Rolling The Dice
              <hr />
            </Row>
            <Row fluid>{DataFile.Rules["Rolling the Dice"]}</Row>
          </Container>
          <br />
          <Container fluid>
            <Row fluid className="fw-bold">
              Winning
              <hr />
            </Row>
            <Row fluid>{DataFile.Rules["How to win"]}</Row>
          </Container>
          <br />

          <h3>Settings</h3>
          <Container fluid>
            <Row fluid className="fw-bold">
              GamerTag
              <hr />
            </Row>
            <Row fluid>{DataFile.Settings.GamerTag}</Row>
          </Container>
          <br />
          <Container fluid>
            <Row fluid className="fw-bold">
              Persistant Score
              <hr />
            </Row>
            <Row fluid>{DataFile.Settings["Persistant Score"]}</Row>
          </Container>
          <br />
          <Container fluid>
            <Row fluid className="fw-bold">
              Timer
              <hr />
            </Row>
            <Row fluid>{DataFile.Settings.Timer}</Row>
          </Container>
          <br />
          <Container fluid>
            <Row fluid className="fw-bold">
              Rounds
              <hr />
            </Row>
            <Row fluid>{DataFile.Settings.Rounds}</Row>
          </Container>
          <br />
          <Container fluid>
            <Row fluid className="fw-bold">
              Number of Players
              <hr />
            </Row>
            <Row fluid>{DataFile.Settings["Number of Players"]}</Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DescriptionComponent;
