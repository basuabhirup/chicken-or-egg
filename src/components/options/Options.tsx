import React from "react";
import "./Options.css";
import { IPair } from "../../utils/interfaces";

interface IProps {
  pair: IPair;
  isLoading: boolean;
  option1ref: React.MutableRefObject<HTMLButtonElement | null>;
  option2ref: React.MutableRefObject<HTMLButtonElement | null>;
  isInitialLoad: boolean;
  handleOptionSelection: (e: any) => void;
}

const Options: React.FC<IProps> = ({
  pair,
  isLoading,
  option1ref,
  option2ref,
  isInitialLoad,
  handleOptionSelection,
}) => {
  return (
    <>
      <section className="options">
        <button
          className="option"
          name="option1"
          ref={option1ref}
          disabled={isLoading}
          onClick={handleOptionSelection}
        >
          {pair.options[0]}
        </button>
        <p className="conjunction">or</p>
        <button
          className="option"
          name="option2"
          ref={option2ref}
          disabled={isLoading}
          onClick={handleOptionSelection}
        >
          {pair.options[1]}
        </button>
      </section>
      {!!isInitialLoad && (
        <p className="info-text">
          Click to start the game, and end the lifelong dilemma
        </p>
      )}
    </>
  );
};

export default Options;
