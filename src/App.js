import React from "react";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <div className={classes.App}>
        <Header />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
