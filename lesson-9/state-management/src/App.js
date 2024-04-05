import React from "react";
import Home from "./pages/home";
import Cuadro1 from "./molecules/cuadro1";
import Cuadro2 from "./molecules/cuadro2";

function App() {
  return (
    <div>
      <Cuadro1 postId={1} />
      <Cuadro2 postId={3} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
