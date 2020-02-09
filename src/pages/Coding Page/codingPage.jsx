import React, { Component } from "react";
import { Redirect } from "react-router";
import TabBar from "./tabBar";
import CPPUse from "./CPPUse/CPPUse";
import Title from "../title";
import Console from "./console";
import "codemirror/lib/codemirror.js";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/clike/clike";
import "codemirror/addon/edit/closebrackets.js";

class CodingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      renderConsole : false
    };

   
  }
   
  passValue(val) {
    this.props.handlePassedValue(val);
  }

  handleClick = () => {
    this.setState({
      redirect: true
    });
  };
  
  handleConsole=() => {
    this.setState({
      renderConsole: true
    });
 
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect push to="/testcases" />;
    }
    let options = {
      lineNumbers: true,
      theme: "material",
      mode: "text/x-c++src",
      mode: "text/x-csrc",
      styleActiveLine: true,
      autoCloseBrackets: true,
      matchBrackets: true
    };
    return (
      <div className="col-sm-12">
        <div className="row" style={{ height: "7vh" }}>
          <Title title="Coding Page" />
        </div>
        <div
          className="row"
          style={{
            height: "86vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <TabBar
            passValue={this.passValue.bind(this)}
            class1={this.props.class1}
            class2={this.props.class2}
            class3={this.props.class3}
            class4={this.props.class4}
            class5={this.props.class5}
            class6={this.props.class6}
            class7={this.props.class7}
            class8={this.props.class8}
          />
          <div className="mainTab scroller" id="style-1">
            <div
              className="questionArea scroller p-3"
              style={{
                height: "60vh",
                width: "79vw",
                background: "rgba(8, 8, 15, 0.8)",
                color: "white",
                fontSize: "2.3vh",
                borderRadius: "5px",
                overflow: "auto"
              }}
            >
              Given a 2D array of digits or grid, try to find the occurrence of
              a given 2D pattern of digits. For example, consider the following
              grid:
              <br />
              1234567890 <br />
              0987654321 <br />
              1111111111 <br />
              1111111111 <br />
              2222222222 <br />
              Assume we need to look for the following 2D pattern array:
              <br />
              876543
              <br />
              111111 <br />
              111111
              <br />
              The 2D pattern begins at the second row and the third column of
              the grid. The pattern is said to be present in the grid.
              <br />
              Function Description
              <br />
              Complete th gridSearch function in the editor below. It should
              return YES if the pattern exists in the grid, or NO otherwise.
              <br />
              gridSearch has the following parameter(s):
              <br />
              G: the grid to search, an array of strings
              <br />
              P: the pattern to search for, an array of strings
              <br />
              Input Format
              <br />
              The first line contains an integer , the number of test cases.
              <br />
              Each of the test cases is represented as follows:
              <br />
              The first line contains two space-separated integers and ,
              indicating the number of rows and columns in the grid . This is
              followed by lines, each with a string of digits representing the
              grid . The following line contains two space-separated integers,
              and , indicating the number of rows and columns in the pattern
              grid . This is followed by lines, each with a string of digits
              representing the Constraints
              <br />
              Output Format
              <br />
              Display YES or NO, depending on whether is present in . Sample
              Input
              <br />
              2<br />
              10 10
              <br />
              7283455864
              <br />
              6731158619
              <br />
              8988242643
              <br />
              3830589324
              <br />
              2229505813
              <br />
              5633845374
              <br />
              6473530293
              <br />
              7053106601
              <br />
              0834282956
              <br />
              4607924137
              <br />
              3 4<br />
              9505
              <br />
              3845
              <br />
              3530
              <br />
              15 15
              <br />
              400453592126560
              <br />
              114213133098692
              <br />
              474386082879648
              <br />
              522356951189169
              <br />
              887109450487496
              <br />
              252802633388782
              <br />
              502771484966748
              <br />
              075975207693780
              <br />
              511799789562806
              <br />
              404007454272504
              <br />
              549043809916080
              <br />
              962410809534811
              <br />
              445893523733475
              <br />
              768705303214174
              <br />
              650629270887160
              <br />
              2 2<br />
              99
              <br />
              99
              <br />
              Sample Output
              <br />
              YES NO Explanation
              <br />
              The first test in the input file is:
              <br />
              10 10 7283455864
            </div>
            <div
              style={{
                height: "69vh",
                width: "79vw",
                marginTop: "2vh",
                backgroundColor: "black",
                display: "block",
                justifyContent: "center",
                alignContent: "center",
                borderRadius: "5px",
                
              }}
            >
              <span style={{ display: "flex" }}>
                <CPPUse />
                <span style={{ marginLeft: "40vw" }}>
                  <input type="file" id="file" />
                  <label for="file">Choose file</label>
                  <button
                    className="btn btn-dark"
                    style={{
                      marginBottom: "1vh",
                      outline: "none",
                      border: "none",
                      marginTop: "1vh",
                      marginLeft: "1vw",
                      marginRight: "1vw",
                      width: "10vw"
                    }}
                  >
                    Load Buffer
                  </button>
                </span>
              </span>
              <CodeMirror
                value={this.state.value}
                options={options}
                onBeforeChange={(editor, data, value) => {
                  this.setState({ value });
                }}
                onChange={(editor, data, value) => {}}
                editorDidMount={editor => {
                  editor.setSize("79vw", "55vh");
                }}
              />
              <span style={{ marginLeft: "63vw" }}>
                <button
                  className="btn btn-dark"
                  style={{
                    marginTop: "1.4vh",
                    marginLeft: "-8vw",
                    outline: "none",
                    border: "none",
                    width: "10vw"
                  }}
                  onClick={() => this.handleClick()}
                >
                  Submit
                </button>
                <button
                  className="btn btn-dark"
                  style={{
                    marginTop: "1.4vh",
                    outline: "none",
                    border: "none",
                    width: "10vw",
                    marginLeft: "1vw"
                  }}
                  onClick = {this.handleConsole}
                >
                  Run
                </button>
              </span>
            </div>
            <Console  render={this.state.renderConsole}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CodingPage;
