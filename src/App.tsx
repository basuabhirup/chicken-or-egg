import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Mascot from "./components/mascot/Mascot";
import Options from "./components/options/Options";
import { IPair } from "./utils/interfaces";
import data from "./data/pairs1.json";
import ReactModal from "react-modal";
import Footer from "./components/footer/Footer";
import InfoModal from "./components/infoModal/InfoModal";

const infoModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1.3125rem",
    background: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

ReactModal.setAppElement("#root");

const App: React.FC = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [selectionStatus, setSelectionStatus] = useState<boolean | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pair, setPair] = useState<IPair>(data[0]);

  const remainingPairsRef = useRef<IPair[]>(data.slice(0));
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
      option2ref.current!.style.color = "var(--white)";
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

  const getRandomPairWithoutRepeat = () => {
    if (remainingPairsRef.current.length < 2) {
      // we will omit data[0] for randomisation purpose
      remainingPairsRef.current = data.slice(0); //recreate as a duplicate array
    }
    const index = Math.floor(
      Math.random() * (remainingPairsRef.current.length - 1) + 1
    ); // ignore data[0]
    var item = remainingPairsRef.current[index];
    // console.log(item.pair_id);
    remainingPairsRef.current.splice(index, 1);
    // const remainingIndices = remainingPairsRef.current.map(
    //   (item) => item.pair_id
    // );
    // console.log(remainingIndices);
    return item;
  };

  const fetchNextPairOfOptions = () => {
    setIsFetching(true);
    resetAnswerSelection();
    setSelectionStatus(null);
    const newPair = getRandomPairWithoutRepeat();
    setPair(newPair);
    setTimeout(() => {
      setIsFetching(false);
    }, 1500);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
    // Following code to be executed on clicking CTA button of the modal
    fetchNextPairOfOptions();
  };

  // Apply Side Effects
  useEffect(() => {
    if (selectionStatus === true || selectionStatus === false) {
      setTimeout(() => {
        setIsLoading(false);
        // Code Block to display Modal
        openModal();
      }, 1250);
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
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={infoModalStyles}
        contentLabel="Info Modal"
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
      >
        <InfoModal pair={pair} closeModal={closeModal} />
      </ReactModal>
      <Footer isFetching={isFetching} />
    </div>
  );
};

export default App;
