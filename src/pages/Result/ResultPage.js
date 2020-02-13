import React, { Component } from "react";
import "./ResultPage.css";
import "bootstrap/dist/css/bootstrap.css";
import DisplayText from "./resultComponents/DisplayText";
import Chart from "./resultComponents/Chart";
import Value from "./resultComponents/Value";
import submissions from "./resultComponents/submissions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {}
    };
  }

  UNSAFE_componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: submissions.map(sub => `Q${sub.question}`),
        datasets: [
          {
            label: "Time in minutes",
            data: submissions.map(sub => sub.time_taken_in_min),
            backgroundColor: submissions.map(arr => {
              let color;
              if (arr.result === "ACC") color = "rgba(90, 255, 100, 0.95)";
              else if (arr.result === "WA") color = "rgba(255, 54, 70, 0.95)";
              else if (arr.result === "TLE") color = "rgba(255, 206, 86, 0.95)";
              else if (arr.result === "AT") color = "rgba(75, 192, 240, 0.95)";
              else color = "rgba(153, 102, 255, 0.95)";
              return color;
            }),
            borderWidth: 1.5,
            borderColor: "#555",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
          }
        ]
      }
    });
  }
  render() {
    console.log(this.props.teamName);
    return (
      <div className="container-fluid">
        <div className="row mainRow">
          <div className="row pageTitle">
            <p id="pageTitle">
              <u>Result</u>
            </p>
          </div>
          <div
            className="row content"
            style={{ marginLeft: "18vw", marginRight: "18vw" }}
          >
            <div className="row upper">
              <div className="col-sm-6">
                <DisplayText text="Team Name" border="false" />
                <DisplayText text={this.props.teamName} border="true" />
              </div>
              <div className="col-sm-6" style={{ paddingRight: "25px" }}>
                <DisplayText text="Rank" border="false" />
                <DisplayText text="7" border="true" />
              </div>
            </div>
            <div className="row lower">
              <div className="col-sm-6">
                <DisplayText text="Questions Attempted" border="false" />
                <DisplayText text="6" border="true" />
              </div>
              <div className="col-sm-6" style={{ paddingRight: "25px" }}>
                <DisplayText text="Score" border="false" />
                <DisplayText text="400" border="true" />
              </div>
            </div>
          </div>
          <div className="row chartHolder">
            <div className="col-sm-9">
              <Chart chartData={this.state.chartData} />
            </div>
            <div className="col-sm-3">
              <div className="row" style={{ textAlign: "center" }}>
                <div className="key">
                  <u>Key</u>
                </div>
              </div>
              <React.Fragment>
                <Value color="rgba(90, 255, 100, 0.95)" text="Accepted" />
                <Value color="rgba(255, 54, 70, 0.95)" text="Wrong Answer" />
                <Value color="rgba(255, 206, 86, 0.95)" text="TLE" />
                <Value
                  color="rgba(75, 192, 240, 0.95)"
                  text="Abnormal Termination"
                />
                <Value color="rgba(153, 102, 255, 0.95)" text="Runtime Error" />
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    teamName: state.userName
  };
};
export default connect(mapStateToProps)(App);
