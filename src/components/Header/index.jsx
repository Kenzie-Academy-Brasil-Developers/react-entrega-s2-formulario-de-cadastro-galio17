import React from "react";
import { Link } from "react-router-dom";
import Button from "../../styles/button";
import { ContentContainer } from "../../styles/containers";
import StyledHeader from "./styles";

const Header = ({ button, onClick }) => {
  return (
    <StyledHeader>
      <ContentContainer>
        <h1>Kenzie Hub</h1>
        {button && (
          <Link to="/register/login">
            <Button onClick={onClick}>{button}</Button>
          </Link>
        )}
      </ContentContainer>
    </StyledHeader>
  );
};

export default Header;
