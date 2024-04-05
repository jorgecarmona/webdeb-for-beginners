import React from "react";

import Cuadro1 from "../molecules/cuadro1";
import Cuadro2 from "../molecules/cuadro2";
import Cuadro3 from "../molecules/cuadro3";

function Container() {
  return (
    <div style={{display: "flex", gap: 4}}>
      <Cuadro1 />
      <Cuadro2 />
      <Cuadro3 />
    </div>
  );
}

export default Container;
