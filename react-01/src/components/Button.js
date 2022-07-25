import React from "react";

function Button(props) {
  function troca(nameButton) {
    if (nameButton === "React") {
      return alert("Ok, React!");
    } else if (nameButton === "JavaScript") {
      alert("Ok, Javascript!");
    } else {
      alert("Ok, JSX!");
    }
  }
  return (
    <button onClick={() => troca(props.nameButton)} className="btn">
      {props.nameButton}
    </button>
  );
}

export default Button;
