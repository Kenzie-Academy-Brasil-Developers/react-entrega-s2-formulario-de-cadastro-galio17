import React from "react";
import { Link } from "react-router-dom";

const Header = ({ button, onClick }) => {
  return (
    <header>
      <h1>Kenzie Hub</h1>
      {button && (
        <Link to="/register/login">
          <button onClick={onClick}>{button}</button>
        </Link>
      )}
    </header>
  );
};

export default Header;
