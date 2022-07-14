import React from "react";
import Button from "../UI/Button";

const Header = (props) => {
    return (
        <div className = "header">
            <Button action= "sign-in">Sign In</Button>
            <Button action="sign-up">Sign Up</Button>
        </div>
    );
}

export default Header;