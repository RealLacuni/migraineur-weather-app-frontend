import styled from "styled-components";

export const StyledButton = styled.button`
  color: #fff;
  outline: none;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 1.5vw;
  line-height: 1;
  background-color: blue;
  text-align: center;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.5s;
  height: 6vh;
  width: 15vw;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin:1vh 1vw 0 0;
  font-family: sans-serif;
  font-weight:bold;
  text-transform: uppercase;

  @media (max-width:420px) {
    height:3vh;
  }
  &:active {
    transform: scale(1.04);
    background-color: #6520fa;
  }
`;
