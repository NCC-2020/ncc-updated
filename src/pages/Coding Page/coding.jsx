import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../LeaderBoard/components/footer";
import CodingPage from "./codingPage";

class Coding extends Component {
  state = {
    class1: "black",
    class2: "black",
    class3: "black",
    class4: "black",
    class5: "black",
    class6: "black",
    class7: "black",
    class8: "black"
  };

  handlePassedValue(val) {
    if (val === 1) {
      this.setState({
        class1: "highlight",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black"
      });
    } else if (val === 2) {
      this.setState({
        class1: "black",
        class2: "highlight",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black"
      });
    } else if (val === 3) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "highlight",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black"
      });
    } else if (val === 4) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "highlight",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black"
      });
    } else if (val === 5) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "highlight",
        class6: "black",
        class7: "black",
        class8: "black"
      });
    } else if (val === 6) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "highlight",
        class7: "black",
        class8: "black"
      });
    } else if (val === 7) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "highlight",
        class8: "black"
      });
    } else if (val === 8) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "highlight"
      });
    }
  }

  componentDidMount() {
    if (this.props.location.param2 === 1) {
      this.setState({
        class1: "highlight"
      });
    } else if (this.props.location.param2 === 2) {
      this.setState({
        class2: "highlight"
      });
    } else if (this.props.location.param2 === 3) {
      this.setState({
        class3: "highlight"
      });
    } else if (this.props.location.param2 === 4) {
      this.setState({
        class4: "highlight"
      });
    } else if (this.props.location.param2 === 5) {
      this.setState({
        class5: "highlight"
      });
    } else if (this.props.location.param2 === 6) {
      this.setState({
        class6: "highlight"
      });
    } else if (this.props.location.param2 === 7) {
      this.setState({
        class7: "highlight"
      });
    } else if (this.props.location.param2 === 8) {
      this.setState({
        class8: "highlight"
      });
    }
  }

  render() {
    //console.log(this.props.location.param2);

    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "86vh" }}>
              <CodingPage
                handlePassedValue={this.handlePassedValue.bind(this)}
                class1={this.state.class1}
                class2={this.state.class2}
                class3={this.state.class3}
                class4={this.state.class4}
                class5={this.state.class5}
                class6={this.state.class6}
                class7={this.state.class7}
                class8={this.state.class8}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Coding;
