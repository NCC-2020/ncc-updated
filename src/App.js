import React,{Component} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import Login from "./pages/Login/Login";
import Leaderboard from "./pages/LeaderBoard/leaderboard";
import QuestionH from "./pages/Question Hub/components/MainTable";
import Result from "./pages/Result/ResultPage";
import Coding from "./pages/Coding Page/coding";
import Navbar from './mainComponents/Navbar';
import Footer from './mainComponents/footer';

import Testcases from './pages/Testcases/testcases';
import Submissions from './pages/Submissions/components/submissions';


class App extends Component {
  state = {  }

  componentDidMount(){
    var l = window.location.href;
    console.log(l);
  }
  render() { 
  

  return (
    
    <BrowserRouter>
      <Route path="/result" component={Result} />
      <Route exact path="/" component={Login} />
     <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar loc={this.props.location}/>
          <div className="col-sm-10">
            {/* <div className="row" style={{ height: "7vh" }}>
              <Title title="Testcases"></Title>
            </div> */}
            <div className="row" style={{ height: "93vh" }}>
            
            
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/submission" component={Submissions} />
              <Route path="/testcases" component={Testcases} />
              <Route path="/coding" component={Coding} />
              <Route path="/question" component={QuestionH} />
         
              
      
            </div>
          </div>
        </div>
        <Footer />
      </div>
      
    </BrowserRouter>
    
  );
          };
}

export default App;
