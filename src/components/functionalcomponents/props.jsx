//import React from "react";
 import "../../css/props.css";
//import { ReactDOM } from "react";

function TestComp(props)
{
    const atribute={ background:"pink"}//internal
    return(
        <div style={atribute}>
        {/* inline css */}
       {/* <div style={{color:"black"}}>  */}
        <h1>Hello,  Im  {props.name}<br></br>{props.role}</h1>
        </div>
    );
}
export default TestComp;