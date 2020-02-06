import React from 'react';
import "./navBar.css";

const Timer = () => {

    function startTimer(duration, display1,display2,display3) {
        var timer = duration,hrs, minutes, seconds,h1="7.8",h2="7.8",h3="7.8";
        setInterval(function () {
            hrs = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600)/60, 10);
            seconds = parseInt((timer % 3600)%60,10);
    
            hrs = "0" + hrs;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display1.textContent = hrs;
            display2.textContent = minutes;
            display3.textContent = seconds;
            document.getElementById("insideSec").style.height=h1+ "vh";
            document.getElementById("insideMin").style.height=h2+ "vh";
            document.getElementById("insideHr").style.height=h3+ "vh";
            //seconds logic
            h1=parseFloat(h1,10);
            h1=h1-(.13);
            if(h1<=.13)
            h1=7.8;
            console.log(h1);
            h1=h1.toString(10);

            //minutes logic
            h2=parseFloat(h2,10);
            h2=h2-(.0021);
            if(h2<=0.0021)
            h2=7.8;
            h2=h2.toString(10);
            
            //hours logic
            h3=parseFloat(h3,10);
            h3=h3-(.0007222);
            if(h3<=.0007222)
            h3=7.8;
            h3=h3.toString(10);

            if (--timer < 0) {
                timer = duration;
            }

        }, 1000);
    }
    
    window.onload = function () {
        let hrs = 60*60*3;
        let display1 = document.querySelector('#hr');
            let display2 = document.querySelector('#min');
            let display3 = document.querySelector('#sec');
        startTimer(hrs, display1,display2,display3);
    };

    return (
        <div className="col-sm-11">
            <div className="row time" >
        <div className="circular" >
        <div id="insideHr" style={{borderLeft:"4.5vw solid rgb(10,45,105)"}}>
            </div>
            <span id="hr"></span>
        </div>
        <div className="colon">:</div>
        <div className="circular">
        <div id="insideMin" style={{borderLeft:"4.5vw solid rgb(10,45,105)"}}>
            </div>
            <span id="min"></span>
        </div>
        <div className="colon">:</div>
        <div  className="circular">
            <div id="insideSec" style={{borderLeft:"4.5vw solid rgb(10,45,105)"}}>
            </div>
            <span id="sec"></span>
        </div>
        </div>
        </div>
    );
}
 
export default Timer;