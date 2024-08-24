import { useState } from "react";
import { Button, CloseButton, Col, Form, Modal, Row } from "react-bootstrap";

function SettingsOverlay() {
  const [show, setShow] = useState(true);

  function handleOpenClose() {
    setShow(!show);
  }

  function handleData(e) {
    e.preventDefault();

    handleOpenClose();
  }

  function handleInputChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <Modal
        className="text-dark p-3"
        animation={true}
        show={show}
        backdrop={"static"}
      >
        <Modal.Header>
          Game Settings
          <CloseButton onClick={handleOpenClose} />
        </Modal.Header>

        <Modal.Body>
          <Row
            id="question-1"
            className="justify-content-start align-items-center"
          >
            <Col lg={8}>
              <Form.Label>What is your Gamer Tag?</Form.Label>
            </Col>
          </Row>
          <Row
            id="answer-1"
            className="justify-content-center align-items-center"
          >
            <Col lg={8}>
              <Form.Control
                type="text"
                role="button"
                placeholder="FireStorm2323"
              />
            </Col>
            <Col lg={4}>
              <Button variant="primary" onClick={handleData}>
                Submit
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Button
        variant="primary"
        onClick={handleOpenClose}
        className="text-center"
      >
        Show Settings
      </Button>
    </>
  );
}

export default SettingsOverlay;
