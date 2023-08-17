import React, { useEffect } from "react";
import "./Mascot.css";
import Loader_Mascot from "../../assets/Loader_Mascot.gif";
import { MascotHappy, MascotNeutral, MascotSad } from "../../assets/Mascots";

interface IProps {
  isFetching: boolean;
  selectionStatus: boolean | null;
}

const Mascot: React.FC<IProps> = ({ isFetching, selectionStatus }) => {
  const applyGooglyEyes = () => {
    const eyeball_left = document.querySelector(".eyeball_left");
    const pupil_left = document.querySelector(".pupil_left");
    const eyeball_right = document.querySelector(".eyeball_right");
    const pupil_right = document.querySelector(".pupil_right");

    const pupils = [
      { pupil: pupil_left, eyeball: eyeball_left },
      { pupil: pupil_right, eyeball: eyeball_right },
    ];

    const maxX = 3; // Maximum horizontal movement
    const maxY = 2; // Maximum vertical movement

    pupils.forEach(({ pupil, eyeball }: any) => {
      (pupil as any).style.transition = "transform 0.2s ease-out"; // Add CSS transition
    });

    const handleMouseMove = (e: any) => {
      pupils.forEach(({ pupil, eyeball }) => {
        const { left, top, width, height } = (
          eyeball as any
        ).getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const x = e.clientX - centerX;
        const y = e.clientY - centerY;

        const moveX = Math.min(Math.max((x / width) * maxX, -maxX), maxX);
        const moveY = Math.min(Math.max((y / height) * maxY, -maxY), maxY);

        (pupil as any).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    return handleMouseMove;
  };

  // Apply Side Effect to apply Googly Eyes
  useEffect(() => {
    const handleMouseMove = applyGooglyEyes();
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let handleMouseMove: (e: any) => void;
    if (!isFetching) {
      handleMouseMove = applyGooglyEyes();
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (!isFetching) {
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isFetching]);

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
      <div
        className="mascot"
        dangerouslySetInnerHTML={{
          __html:
            selectionStatus === null
              ? MascotNeutral
              : selectionStatus === true
              ? MascotHappy
              : MascotSad,
        }}
      />
    </div>
  );
};

export default Mascot;
