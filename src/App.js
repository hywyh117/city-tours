import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Nevbar/Navbar";
import TourList from "./Components/TourList";
import Tour from "./Components/Tour/Tour";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
        <Tour />
      </React.Fragment>
    );
  }
}

export default App;
