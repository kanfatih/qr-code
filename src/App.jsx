import React from "react";
import "./App.css";
import image from "./assets/image-qr-code.png";

const App = () => {
  return (
    <div className="container">
      <img className="image" src={image} alt="qr" />
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default App;
