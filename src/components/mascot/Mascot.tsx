import React from "react";
import "./Mascot.css";
import Mascot0 from "../../assets/svg/Mascot0.svg";
import Mascot1 from "../../assets/svg/Mascot1.svg";
import Mascot2 from "../../assets/svg/Mascot2.svg";

interface IProps {
  isLoading: boolean
  selectionStatus: boolean | null;
}

const Mascot: React.FC<IProps> = ({ isLoading, selectionStatus }) => {
  return (
    <div className="mascot-container">
      {selectionStatus === null && (
        <img className="mascot" src={Mascot0} alt="Neutral Face" />
      )}
      {selectionStatus === true && (
        <img className="mascot" src={Mascot1} alt="Happy Face" />
      )}
      {selectionStatus === false && (
        <img className="mascot" src={Mascot2} alt="Sad Face" />
      )}
    </div>
  );
};

export default Mascot;
