import React from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import sun from "../../_assets/transparentsun.png";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div>
          <img src={sun} alt="icon of sun and clouds"></img>
          <p>F</p>
        </div>
        <p className={classes.title}>{"Migraineur's Weather App"}</p>
        <div className={classes.buttonDiv}>
          <Button action="sign-in" buttonStyle={"accountButton"}>
            Sign In
          </Button>
          <Button action="sign-up" buttonStyle={"accountButton"}>
            Sign Up
          </Button>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
