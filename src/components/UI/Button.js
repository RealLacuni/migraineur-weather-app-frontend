import React from "react";
import { StyledButton } from "../styles/Button.styled.jsx";

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
