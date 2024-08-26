import { useState } from "react";
import { Button, CloseButton, Col, Form, Modal, Row } from "react-bootstrap";
import SettingsLayout from "./SettingsLayout";

function SettingsOverlay(props) {
  const [show, setShow] = useState(false);

  function handleOpenClose() {
    setShow(!show);
  }

  return (
    <>
      <Modal
        className="text-dark p-3"
        animation={true}
        show={show}
        backdrop={"static"}
        centered
        size={"lg"}
      >
        <Modal.Header className="text-light">
          Flotzzy Settings
          <CloseButton onClick={handleOpenClose} />
        </Modal.Header>

        <Modal.Body>
          <SettingsLayout
            showing={show}
            onSettingsChange={props.onSettingsChange}
            onClose={handleOpenClose}
          />
        </Modal.Body>
      </Modal>

      <Button variant="dark" onClick={handleOpenClose} className="text-center">
        Show Settings
      </Button>
    </>
  );
}

export default SettingsOverlay;
