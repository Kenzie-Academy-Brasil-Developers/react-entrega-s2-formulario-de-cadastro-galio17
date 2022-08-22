import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import Button from "../../styles/button";
import { ContentContainer } from "../../styles/containers";
import StyledHeader from "./styles";

interface IHeaderProps {
  button?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Header = ({ button, onClick }: IHeaderProps) => (
  <StyledHeader>
    <ContentContainer>
      <h1>Kenzie Hub</h1>
      {button && (
        <Link to="/login">
          <Button onClick={onClick}>{button}</Button>
        </Link>
      )}
    </ContentContainer>
  </StyledHeader>
);

export default Header;
