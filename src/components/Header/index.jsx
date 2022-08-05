import React from "react";

const Header = ({ button }) => {
  return (
    <header>
      <h1>Kenzie Hub</h1>
      {button && <button>{button}</button>}
    </header>
  );
};

export default Header;
