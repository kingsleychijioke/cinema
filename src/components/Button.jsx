import React from "react";
import "./Button.css";

function Button({ icon, name, bgcolor = "#ff3700", color = "#ffffff" }) {
  return (
    <a
        href="#"
  className="mainBtn"
  style={{
    "--btn-bg": bgcolor,
    "--btn-color": color,
  }}   
    >
      {icon} {name}
    </a>
  );
}

export default Button;
