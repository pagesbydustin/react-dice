import { useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";

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
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Rules and settings of Flotzzy</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid>
            <Row fluid>
              <Col>a</Col>
              <Col>a-1</Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DescriptionComponent;
