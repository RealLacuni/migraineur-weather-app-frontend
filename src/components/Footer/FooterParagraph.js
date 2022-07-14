import React from "react";
import classes from "./FooterParagraph.module.css";

const FooterParagraph = (props) => {
  return (
    <div className={classes.paragraph}>
      <h3>{props.title}</h3>
      <p className={classes['paragraph-content']}>{props.children}</p>
    </div>
  );
};

export default FooterParagraph;
