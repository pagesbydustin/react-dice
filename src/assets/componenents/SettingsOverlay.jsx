import { useState } from "react";
import { Button, CloseButton, Col, Form, Modal, Row } from "react-bootstrap";
import SettingsLayout from "./SettingsLayout";

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
        centered
      >
        <Modal.Header className="text-light">
          Flotzzy Settings
          <CloseButton onClick={handleOpenClose} />
        </Modal.Header>

        <Modal.Body>
          <SettingsLayout></SettingsLayout>
        </Modal.Body>
      </Modal>

      <Button variant="dark" onClick={handleOpenClose} className="text-center">
        Show Settings
      </Button>
    </>
  );
}

export default SettingsOverlay;
