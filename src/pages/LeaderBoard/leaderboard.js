import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer.jsx";
import FinalBoard from "./components/finalBoard";
import Title from "./title";

class Leaderboard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <Title title="Leaderboard" />
            </div>
            <div className="row" style={{ height: "86vh" }}>
              <FinalBoard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Leaderboard;
