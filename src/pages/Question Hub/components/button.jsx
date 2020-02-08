import React, {Component} from 'react';
import { Redirect } from "react-router";
import "./button.css"
import './mytable.css'

class Button extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            redirect: false
        }
    }
    
    handleClick = () => {
        this.setState({
            redirect: true
        })
    }

    render() { 
        if(this.state.redirect === true){
            return <Redirect push to="/coding" />
        }
        return ( 
            <button className="butView" onClick={() => this.handleClick()} >View</button>
        );
    }
}
 
export default Button;