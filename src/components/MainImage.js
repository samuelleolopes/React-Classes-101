import React from "react";

function MainImage(props) {
  return (
    <>
      <img className="imagem" src={props.src} alt={props.alt} />
    </>
  );
}

export default MainImage;
