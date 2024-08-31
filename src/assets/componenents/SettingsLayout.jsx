import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Helper from "../utils/Helper";

import { RiAccountBoxFill, RiCheckFill } from "react-icons/ri";

export default function SettingsLayout(props) {
  const Helps = new Helper();

  const randomNumber100to200 = Helps.getRandomNumber(100, 200);
  const defaultGamerTag = `Dragon_Slayer_${randomNumber100to200}`;
  const [formData, setFormData] = useState({
    gamerTag: defaultGamerTag,
    persistantScore: false,
    timer: false,
    round: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSettings = new FormData(e.target);
    const settingsData = Object.fromEntries(newSettings);
    const updatedSettingsData = {
      ...settingsData,
      gamerTag: settingsData.gamerTag || defaultGamerTag,
      persistantScore: settingsData.persistantScore == "on" ? true : false,
      timer: settingsData.timer == "on" ? true : false,
      round: 0,
    };

    props.onClose();
    props.onSettingsChange(updatedSettingsData);
  };

  return (
    <Container className="text-light">
      <Form name={"settingsForm"} onSubmit={handleSubmit}>
        <Row className="p-2">
          <Col>
            <Form.Label className="fw-bold">
              What is your Gamer Tag? <RiAccountBoxFill size={20} />
            </Form.Label>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <Form.Control
              defaultValue={defaultGamerTag}
              type="input"
              placeholder={defaultGamerTag}
              id="GamerTag"
              name="gamerTag"
            ></Form.Control>
          </Col>
        </Row>
        <Row className="p-2">
          <Form.Label className="fw-bold">
            <RiCheckFill size={20} /> - Check to turn options on.
          </Form.Label>
        </Row>
        <Row>
          <Col>
            <Form.Check
              label="Persistant Score"
              name="persistantScore"
              type="switch"
            />
          </Col>
          <Col>
            <Form.Check label="Timer" name="timer" type="switch" />
          </Col>
          <Col>
            <Form.Text>
              {localStorage.getItem("dodo-gameSettings").round}
            </Form.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit">Save</Button>
          </Col>
          <Col>
            <Button type="reset">Reset</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
