// Rectangle.js
import React from "react";
import "./style.css"; // Import the CSS file for styling

const Box = ({ color, name }) => {
  return <div className="rectangle" style={{ backgroundColor: color }}>
    <p style={{ fontSize: "24px" }}>{name}</p>

  </div>;
};

export default Box;
