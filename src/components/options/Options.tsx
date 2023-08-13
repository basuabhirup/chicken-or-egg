import React, { useState } from "react";
import "./Options.css";

const Options: React.FC = () => {
  const [options] = useState<String[]>(["Chicken", "Egg"]);
  return (
    <>
      <section className="options">
        <button className="option">{options[0]}</button>
        <p className="conjunction">or</p>
        <button className="option">{options[1]}</button>
      </section>
      <p className="info-text">
        Click to start the game, and end the lifelong dilemma
      </p>
    </>
  );
};

export default Options;
