import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Helper from "../utils/Helper";

function DieComponent({ Die }) {
  const helper = new Helper();

  const [powerDieNumber, setPowerDieNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [powerDieHome, setPowerDieHome] = useState({ x: 0, y: 0 });

  const Dieprops = useSpring({
    x: powerDieHome.x,
    y: powerDieHome.y,
    transform: isRolling
      ? `translate(1100px, ${
          helper.getRandomNumber(1, 4) * 100
        }px) rotate(14400deg)`
      : `translate(${powerDieHome.x}px, ${powerDieHome.y}px) rotate(0deg)`,
    config: {
      mass: 6,
      tension: 1450,
      friction: 1000,
      duration: helper.getRandomNumber(300, 1500),
    },
  });

  function handleDiceRoll(e) {
    setIsRolling(true);
    const newDieNumber = helper.getRandomNumber(1, 6);

    setTimeout(() => {
      setPowerDieNumber(newDieNumber);
      setIsRolling(false);
    }, 600);

    return newDieNumber;
  }

  return <>{Die}</>;
}

export default DieComponent;
