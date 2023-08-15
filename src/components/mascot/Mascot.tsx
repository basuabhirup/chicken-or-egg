import React from "react";
import "./Mascot.css";
import Mascot0 from "../../assets/svg/Mascot0.svg";
import Mascot1 from "../../assets/svg/Mascot1.svg";
import Mascot2 from "../../assets/svg/Mascot2.svg";
import Loader_Mascot from "../../assets/Loader_Mascot.gif";

interface IProps {
  isFetching: boolean;
  selectionStatus: boolean | null;
}

const Mascot: React.FC<IProps> = ({ isFetching, selectionStatus }) => {
  if (!!isFetching) {
    return (
      <div className="mascot-container">
        <img
          className="mascot"
          src={Loader_Mascot}
          alt="Loading Face"
          style={{ margin: "3rem auto", width: "27.5rem" }}
        />
      </div>
    );
  }

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
