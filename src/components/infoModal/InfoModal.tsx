import React from "react";
import { IPair } from "../../utils/interfaces";

interface IProps {
  pair: IPair;
  closeModal: () => void;
}

const InfoModal: React.FC<IProps> = ({ pair, closeModal }) => {
  return (
    <div>
      <p>{pair.description}</p>
      <button onClick={closeModal}>close</button>
    </div>
  );
};

export default InfoModal;
