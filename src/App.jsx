import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Game from "./assets/components/test/Game";
import Start from "./assets/components/test/Start";

import "./App.css";
import "./assets/bootstrap.css";

function App() {
  //const [userSelected, setUserSelected] = useState(false);
  const [userSelected, setUserSelected] = useLocalStorageState(
    "userSelected",
    false
  );
  let ret = undefined;

  const doStuff = () => {
    setUserSelected(!userSelected);
  };

  userSelected
    ? (ret = <Game updateGame={doStuff}></Game>)
    : (ret = <Start updateGame={doStuff}></Start>);

  return ret;
}

export default App;
