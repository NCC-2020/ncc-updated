import React, { Component } from "react";
import { Redirect } from "react-router";
import TabBar from "./tabBar";
import CPPUse from "./CPPUse/CPPUse";
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
      redirect: false
    };
  }

  handleClick = () => {
    this.setState({
      redirect: true
    });
  };

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
        <div
          className="row"
          style={{
            height: "86vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <TabBar />
          <div className="mainTab" id="style-1">
            <div
              className="questionArea"
              style={{
                height: "60vh",
                width: "79vw",
                background: "rgba(8, 8, 15, 0.8)",
                color: "white",
                fontSize: "20px",
                borderRadius: "5px"
              }}
            >
              Question
            </div>
            <div
              style={{
                height: "69vh",
                width: "79vw",
                marginTop: "2vh",
                backgroundColor: "black",
                display: "block",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <span style={{ display: "flex" }}>
                <CPPUse />
                <span style={{ marginLeft: "40vw" }}>
                  <button
                    className="btn btn-dark"
                    style={{
                      marginBottom: "1vh",
                      marginLeft: "-5vw",
                      border: "none",
                      marginTop: "1vh",
                      width: "10vw",
                      outline: "none !important"
                    }}
                  >
                    Browse File
                  </button>
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
                >
                  Run
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CodingPage;
