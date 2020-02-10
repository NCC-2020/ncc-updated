import React, { Component } from "react";
import "./testcases.css";
import Testcase from "./testcase";
import CurrentScore from "./currentScore";
import Title from '../title';
import "font-awesome/css/font-awesome.min.css";

class Testcases extends Component {
  state = {
    result: "Running Testcases...",
    testcases: ["pass", "pass", "pass", "pass", "pass", "pass"],
    time : 0
  };

  
  numberBorder = testcase => {
    
    let classes = "number ";
    if(this.state.time<=150){
    classes = classes + "border border-secondary";
    return classes;
    }
    classes =
      testcase === "pass"
        ? classes + "border border-success"
        : classes + "border border-danger";
    return classes;
  };

  componentDidMount(){
    let time =0;
    setInterval(this.setTime=()=>{
      time =time +1;
      this.setState({time});
    },40);
  }
  render() {
    return (
      <div className="col-sm-12">
        <div className="row" style={{ height: "55vh" }}>
          <div className="col-lg-7" style={{ marginLeft: "4vw" }}>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                height: "54vh",
                alignItems: "center"
              }}
            >
              <div className="result col-lg-3">{this.state.result}</div>
              <div
                className="col-lg-1"
                style={{ border: ".5px solid rgb(39, 40, 43)" }}
              ></div>
              <div
                className="col"
                style={{
                  borderLeft: "1px solid rgb(39, 40, 43)",
                  height: "40vh"
                }}
              >
                {this.state.testcases.map((testcase, index) => (
                  <div className="row" style={{ height: "8vh" }}>
                    <div className="testcaseLines col-lg-2" />    
                    <div className={this.numberBorder(testcase)}>
                      {index+1}
                    </div>
                      <Testcase  testcase={testcase} />
                      {/* <span style={{marginLeft:"2vh"}}> &#10004;</span>  */}
                  
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "5vw"
            }}
          >
            <CurrentScore />
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center", height: "28vh" }}
        >
          <div className="col-lg-11">
            <textarea className="console" readOnly>
              Console
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Testcases;
