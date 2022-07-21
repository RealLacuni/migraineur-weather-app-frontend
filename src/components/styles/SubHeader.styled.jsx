import styled from "styled-components";

export const StyledSubHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: bottom;
  justify-content: space-between;

  #signupButtons {
    margin-right: 5vw;
    margin: auto 4vw 0 auto;
    gap: 3vw;
  }

  p {
    word-wrap: normal;
    color: #b7b107;
    padding-left: 3vw;
    margin: auto 4vw 0 auto;
  }
`;
