import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Introduction />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
