import React, { useRef, useState } from "react";
import "./Options.css";
import { IPair } from "../../utils/interfaces";

interface IProps {
  pair: IPair;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectionStatus: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Options: React.FC<IProps> = ({
  pair,
  isLoading,
  setIsLoading,
  setSelectionStatus,
}) => {
  const option1ref = useRef<HTMLButtonElement | null>(null);
  const option2ref = useRef<HTMLButtonElement | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const applyTrueAnswerSelection = (selectedOptionName: String) => {
    setSelectionStatus(true);
    if (selectedOptionName === "option1") {
      option1ref.current!.style.backgroundColor = "var(--green)";
      option1ref.current!.style.boxShadow = "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)"
    }
    if (selectedOptionName === "option2") {
      option2ref.current!.style.backgroundColor = "var(--green)";
      option2ref.current!.style.boxShadow = "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)"
    }
  };

  const applyFalseAnswerSelection = (selectedOptionName: String) => {
    setSelectionStatus(false);
    if (selectedOptionName === "option1") {
      option1ref.current!.style.backgroundColor = "var(--red)";
      option1ref.current!.style.color = "var(--white)";
      option1ref.current!.style.boxShadow = "0px 9.97345px 2.84956px -1.42478px var(--redShadow)"
      option2ref.current!.style.backgroundColor = "var(--green)";
      option2ref.current!.style.boxShadow = "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)"
    }
    if (selectedOptionName === "option2") {
      option1ref.current!.style.backgroundColor = "var(--green)";
      option1ref.current!.style.boxShadow = "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)"
      option2ref.current!.style.backgroundColor = "var(--red)";
      option2ref.current!.style.color = "var(--lightBlue)";
      option2ref.current!.style.boxShadow = "0px 9.97345px 2.84956px -1.42478px var(--redShadow)"
    }
  };

  const handleSelection = (e: any) => {
    const selectedOptionName = e.target.name;
    const selectedOptionValue = e.target.innerHTML;

    setIsLoading(true)

    if (selectedOptionValue === pair.correct_option) {
      applyTrueAnswerSelection(selectedOptionName);
    } else {
      applyFalseAnswerSelection(selectedOptionName);
    }

    if (!!isInitialLoad) {
      setIsInitialLoad(false);
    }
  };

  return (
    <>
      <section className="options">
        <button
          className="option"
          name="option1"
          ref={option1ref}
          disabled={isLoading}
          onClick={handleSelection}
        >
          {pair.options[0]}
        </button>
        <p className="conjunction">or</p>
        <button
          className="option"
          name="option2"
          ref={option2ref}
          disabled={isLoading}
          onClick={handleSelection}
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
