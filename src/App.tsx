import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Mascot from "./components/mascot/Mascot";
import Options from "./components/options/Options";
import Footer from "./components/footer/Footer";
import { IPair } from "./utils/interfaces";
import data from "./data/pairs1.json";

const App: React.FC = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [selectionStatus, setSelectionStatus] = useState<boolean | null>(null);
  const [pair] = useState<IPair>(data[0]);

  const option1ref = useRef<HTMLButtonElement | null>(null);
  const option2ref = useRef<HTMLButtonElement | null>(null);

  const handleOptionSelection = (e: any) => {
    const selectedOptionName = e.target.name;
    const selectedOptionValue = e.target.innerHTML;

    setIsLoading(true);

    if (selectedOptionValue === pair.correct_option) {
      applyTrueAnswerSelection(selectedOptionName);
    } else {
      applyFalseAnswerSelection(selectedOptionName);
    }

    if (!!isInitialLoad) {
      setIsInitialLoad(false);
    }
  };

  const applyTrueAnswerSelection = (selectedOptionName: String) => {
    setSelectionStatus(true);
    if (selectedOptionName === "option1") {
      option1ref.current!.style.backgroundColor = "var(--green)";
      option1ref.current!.style.boxShadow =
        "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)";
    }
    if (selectedOptionName === "option2") {
      option2ref.current!.style.backgroundColor = "var(--green)";
      option2ref.current!.style.boxShadow =
        "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)";
    }
  };

  const applyFalseAnswerSelection = (selectedOptionName: String) => {
    setSelectionStatus(false);
    if (selectedOptionName === "option1") {
      option1ref.current!.style.backgroundColor = "var(--red)";
      option1ref.current!.style.color = "var(--white)";
      option1ref.current!.style.boxShadow =
        "0px 9.97345px 2.84956px -1.42478px var(--redShadow)";
      option2ref.current!.style.backgroundColor = "var(--green)";
      option2ref.current!.style.boxShadow =
        "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)";
    }
    if (selectedOptionName === "option2") {
      option1ref.current!.style.backgroundColor = "var(--green)";
      option1ref.current!.style.boxShadow =
        "0px 9.97345px 2.84956px -1.42478px var(--greenShadow)";
      option2ref.current!.style.backgroundColor = "var(--red)";
      option2ref.current!.style.color = "var(--lightBlue)";
      option2ref.current!.style.boxShadow =
        "0px 9.97345px 2.84956px -1.42478px var(--redShadow)";
    }
  };

  const resetAnswerSelection = () => {
    option1ref.current!.style.backgroundColor = "var(--lightBlue);";
    option1ref.current!.style.color = "var(--darkBlue1)";
    option1ref.current!.style.boxShadow =
      "0px 9.97345px 2.84956px -1.42478px rgba(8, 77, 181, 0.5)";

    option2ref.current!.style.backgroundColor = "var(--lightBlue);";
    option2ref.current!.style.color = "var(--darkBlue1)";
    option2ref.current!.style.boxShadow =
      "0px 9.97345px 2.84956px -1.42478px rgba(8, 77, 181, 0.5)";
  };

  // Apply Side Effects
  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 1250);
  }, []);

  useEffect(() => {
    if (selectionStatus === true || selectionStatus === false) {
      setTimeout(() => {
        setIsLoading(false);
        alert(pair.description);
        // Code Block to display Modal

        // Following code to be executed on clicking CTA button of the modal
        resetAnswerSelection();
        setSelectionStatus(null);
        setIsFetching(true);
        setTimeout(() => {
          setIsFetching(false);
        }, 1750);
      }, 750);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionStatus]);

  return (
    <div className="App">
      <Header pair={pair} />
      <Mascot isFetching={isFetching} selectionStatus={selectionStatus} />
      {!!isFetching ? (
        <div style={{ height: "10rem" }} />
      ) : (
        <Options
          pair={pair}
          isLoading={isLoading}
          option1ref={option1ref}
          option2ref={option2ref}
          isInitialLoad={isInitialLoad}
          handleOptionSelection={handleOptionSelection}
        />
      )}
      <Footer isFetching={isFetching} />
    </div>
  );
};

export default App;
