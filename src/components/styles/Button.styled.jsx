import styled from "styled-components";

export const StyledButton = styled.button`
  color: blanchedalmond;
  white-space: nowrap;
  font-size:1vw;
  background-color: inherit;
  border: solid 0px #ccc;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:active {
    color: white;
    background-color: #1c4d5a;
    box-shadow: 0px 15px 20px rgba(90, 194, 42, 0.4);
    transform: translateY(-3px);
  }
`;
