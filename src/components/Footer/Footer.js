import React from "react";
import "./Footer.css";
import FooterParagraph from "./FooterParagraph";

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterParagraph title="about">
        {
          "This project was born from a desire to practice my software development\
        and programming skills. Inspired by current weather solutions like WeatherX,\
        the goal of this project was to provide a resource to quickly provide important weather information \
        related to possible triggers."
        }
      </FooterParagraph>
      <FooterParagraph title="Links">
        {"www.github.com/RealLacuni"}
      </FooterParagraph>
      <FooterParagraph title="Stay Connected">
        <a href="www.reddit.com/r/migraines">reddit/r/migraines</a>
      </FooterParagraph>
      <FooterParagraph title="Test extra footer">like and subscribe</FooterParagraph>
    </div>
  );
};

export default Footer;
