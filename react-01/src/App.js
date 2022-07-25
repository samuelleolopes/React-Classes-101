import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import MainImage from "./components/MainImage";
import Imagem from "./img/imagem01.png";

import React from "react";

function App() {
  return (
    <>
      <div className="position">
        <MainImage src={Imagem} alt="Imagem01" />
      </div>
      <div className="position highlight">
        <Title nameTitle="Hello React" />
      </div>
      <div className="position">
        <Button nameButton="React" />
        <Button nameButton="JavaScript" />
        <Button nameButton="JSX" />
      </div>
    </>
  );
}

export default App;
