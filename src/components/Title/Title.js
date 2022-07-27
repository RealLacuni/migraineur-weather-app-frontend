import React from "react";
import { StyledTitle } from "../styles/Title.styled.jsx";

export default function Title({ children, className }) {
  return (
    <StyledTitle>
      {/* Have to use props.className for styled() */}
      <h2 className={className}>{children}</h2>
    </StyledTitle>
  );
}
