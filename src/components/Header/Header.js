import { StyledHeader } from "../styles/Header.styled.jsx";
import React from "react";
import Title from "../Title/Title.js";
import Button from "../UI/Button.js";

const Header = (props) => {
  return (
    <React.Fragment>
      <StyledHeader>
        <Title>Migraineur's Weather App</Title>
        <div className="signup buttons">
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </StyledHeader>
    </React.Fragment>
  );
};

export default Header;
