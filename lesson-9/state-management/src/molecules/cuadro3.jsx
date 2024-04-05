import React from "react";
import {AppContext} from "../App";

function Cuadro3() {
  const {state} = React.useContext(AppContext);

  return (
    <div>
      <h3>{state.name || "No name available"}</h3>
      <div>Cuadro 3</div>
    </div>
  );
}

export default Cuadro3;
