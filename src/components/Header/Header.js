import { StyledHeader } from "../styles/Header.styled.jsx";
import React from "react";
import SubHeader from "./SubHeader";
import Title from "../Title/Title";

const Header = (props) => {
  return (
    <StyledHeader>
      <Title/>
      <SubHeader/>
    </StyledHeader>
  );
};

export default Header;
