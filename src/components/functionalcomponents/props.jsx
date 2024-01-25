import React from "react";
import { ReactDOM } from "react";

function TestComp(props){
    return(
        <div>
            <h1>Hello,  Im  {props.name}<br></br>{props.role}</h1>
        </div>
    );
}
export default TestComp;