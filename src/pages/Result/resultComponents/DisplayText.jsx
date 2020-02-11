import React from 'react'

export default function DisplayText(props) {
    if(props.border==="true")
        return (
            <div className="DisplayText" style={{border:'1px solid whitesmoke', borderRadius:'10px', paddingTop: "7px", backgroundColor:'rgba(8, 8, 15, 0.8)', color:'rgb(165, 230, 221)', textShadow:'1px 1px 1px #a1b0c7'}}>
                {props.text}
            </div>
        )
    else
        return (
            <div className="DisplayText" style={{paddingTop: "2vh"}}>
                {props.text}
            </div>
        )
}