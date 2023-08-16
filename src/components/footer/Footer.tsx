import React from "react";
import "./Footer.css";

interface IProps {
  isFetching: boolean;
}

const Footer: React.FC<IProps> = ({ isFetching }) => {
  return (
    <footer>
      {!isFetching && (
        <footer>
          <div>Made with curiosity by <a className="link" href="https://www.behance.net/anushabanerjee" target="_blank" rel="noopener noreferrer">Anusha</a> {`&`} <a className="link" href="https://github.com/basuabhirup" target="_blank" rel="noopener noreferrer">Abhirup</a> </div>
          <div>Copyright {new Date().getFullYear()} © <a className="link" href="https://github.com/basuabhirup/chicken-or-egg" target="_blank" rel="noopener noreferrer">Chicken Or Egg </a></div>
        </footer>
      )}
    </footer>
  );
};

export default Footer;
