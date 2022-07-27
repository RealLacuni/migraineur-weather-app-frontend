import React from "react";
import { StyledSubHeader } from "../styles/SubHeader.styled.jsx";
import Button from "../UI/Button";

export default function SubHeader() {
  return (
    <StyledSubHeader>
      <div id="settings">
        {/* <img src={sun} alt="icon of sun and clouds"></img> */}
    {/* can make these settings look like round buttons that extend out */}
    <p>Pressureeeeee Temperatureeeeeeee Humidity</p> 

      </div>
      <div id="signupButtons">
        <Button action="sign-in">Sign In</Button>
        <Button action="sign-up">Sign Up</Button>
      </div>
    </StyledSubHeader>
  );
}
