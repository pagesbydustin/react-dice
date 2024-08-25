import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Helper from "../utils/Helper";

import {
  RiAccountBoxFill,
  RiProfileFill,
  RiQuestionFill,
  RiTimeFill,
} from "react-icons/ri";

export default function SettingsLayout() {
  const Helps = new Helper();
  const randomNumber100to200 = Helps.getRandomNumber(100, 200);
  const defaultGamerTag = `Dragon_Slayer_${randomNumber100to200}`;

  const [gameSettings, setGameSettings] = useState({
    gamerTag: defaultGamerTag,
    showRules: true,
    bestScore: 0,
    timer: false,
  });

  return (
    <Container className="text-light">
      <Form>
        <Row className="p-2">
          <Col>
            <Form.Label className="fw-bold">
              <RiAccountBoxFill size={20} /> - What is your Gamer Tag?
            </Form.Label>

            <Form.Control
              defaultValue={gameSettings.gamerTag}
              type="input"
              placeholder={gameSettings.gamerTag}
              id="GamerTag"
            ></Form.Control>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <Form.Label className="fw-bold">
              <RiQuestionFill size={20} /> - Have you played before?
            </Form.Label>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <Form.Check
              id="played-chk-yes"
              className="text-start"
              label="Yes"
              type="radio"
              name="g1"
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              id="played-chk-no"
              className="text-start"
              label="No"
              type="radio"
              name="g1"
              defaultChecked
            ></Form.Check>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <Form.Label className="fw-bold">
              <RiProfileFill size={20} /> - Would you like to keep your best
              score?
            </Form.Label>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <Form.Check
              id="keep-score-chk-yes"
              className="text-start"
              label="Yes"
              type="radio"
              name="g2"
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              id="keep-score-chk-no"
              className="text-start"
              label="No"
              type="radio"
              name="g2"
              defaultChecked
            ></Form.Check>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <Form.Label className="fw-bold">
              <RiTimeFill clas size={20} /> - Would you like to turn on timer?
            </Form.Label>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <Form.Check
              disabled
              id="keep-score-chk-yes"
              className="text-start"
              label="Yes"
              type="radio"
              name="g3"
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              id="keep-score-chk-no"
              className="text-start"
              label="No"
              type="radio"
              name="g3"
              defaultChecked
            ></Form.Check>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
