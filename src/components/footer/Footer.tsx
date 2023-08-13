import React from "react";
import "./Footer.css";

interface IProps {
  isFetching: boolean;
}

const Footer: React.FC<IProps> = ({ isFetching }) => {
  return (
    <footer>
      {!isFetching && (
        <>
          <div>Made with curiosity by Anusha {`&`} Abhirup</div>
          <div>Copyright {new Date().getFullYear()} © Chicken Or Egg</div>
        </>
      )}
    </footer>
  );
};

export default Footer;
