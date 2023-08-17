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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfEbNwXz73P1xA__vGzkGWOE5EoFQHwGI0unKEpjHL53qzxFQ/viewform"
          target="_blank"
          rel="noreferrer noopener"
          className="info-modal-error"
        >
          Report an error?
        </a>
      </div>
    </div>
  );
};

export default InfoModal;
