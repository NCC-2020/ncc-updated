import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer.jsx";
import Submissions from "./components/submissions";
import Title from "./../title";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <Title title="Submissions" />
            </div>
            <div className="row" style={{ height: "86vh" }}>
              <div className="container">
                <Submissions />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
