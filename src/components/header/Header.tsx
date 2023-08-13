import React from "react";
import "./Header.css";
import { IPair } from "../../utils/interfaces";

interface IProps {
  pair: IPair;
}

const Header: React.FC<IProps> = ({ pair }) => {
  return (
    <header>{`${
      pair.is_person === true ? "Who" : "What"
    } came first ?`}</header>
  );
};

export default Header;
