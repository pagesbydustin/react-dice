import { useState } from "react";
import { Accordion, Button, Container, Offcanvas } from "react-bootstrap";
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
      <Offcanvas
        id="OCDescription"
        className="w-50"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{DataFile.GameName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Rules</h3>
          <br />
          <Container fluid>
            <Accordion>
              <Accordion.Item eventKey={0}>
                <Accordion.Header>Dice</Accordion.Header>
                <Accordion.Body>{DataFile.Rules["Dice"]}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={1}>
                <Accordion.Header>Rolling The Dice</Accordion.Header>
                <Accordion.Body>
                  {DataFile.Rules["Rolling the Dice"]}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={2}>
                <Accordion.Header>Winning</Accordion.Header>
                <Accordion.Body>{DataFile.Rules["How to win"]}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
          <br />
          <h3>Settings</h3>
          <br />
          <Container fluid>
            <Accordion>
              <Accordion.Item eventKey={0}>
                <Accordion.Header>Gamer Tag</Accordion.Header>
                <Accordion.Body>{DataFile.Settings.GamerTag}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={1}>
                <Accordion.Header>Persistant Score</Accordion.Header>
                <Accordion.Body>
                  {DataFile.Settings["Persistant Score"]}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={2}>
                <Accordion.Header>Timer</Accordion.Header>
                <Accordion.Body>{DataFile.Settings.Timer}</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey={3}>
                <Accordion.Header>Rounds</Accordion.Header>
                <Accordion.Body>{DataFile.Settings.Rounds}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={4}>
                <Accordion.Header>Number of Players</Accordion.Header>
                <Accordion.Body>
                  {DataFile.Settings["Number of Players"]}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DescriptionComponent;
