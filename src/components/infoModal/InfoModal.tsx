import React from "react";
import { IPair } from "../../utils/interfaces";
import "./InfoModal.css";
import NextIcon from "../../assets/svg/NextIcon.svg";

interface IProps {
  pair: IPair;
  closeModal: () => void;
}

const InfoModal: React.FC<IProps> = ({ pair, closeModal }) => {
  return (
    <div className="info-modal-container">
      <p className="info-modal-text">{pair.description}</p>
      <div className="info-modal-cta">
        <button className="info-modal-next" onClick={closeModal}>
          <span>Next </span>
          <img src={NextIcon} alt="Next" />
        </button>
        {/* <button className="info-modal-report">Report Error</button> */}
      </div>
    </div>
  );
};

export default InfoModal;
