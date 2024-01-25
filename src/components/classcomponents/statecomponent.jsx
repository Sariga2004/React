import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"KEC",
            course:"MERN"
        }

    }
    changeState=() =>console.log
    (
          "Kongu engineering college"
    )
    render(){
        return(
            <div>
                <h1>This is state component.</h1>
                <h2>Hello, {this.state.name}<br></br>This is {this.state.course} class</h2>
                <h3> Im changing the state of the {this.state.name} to {this.changeState} </h3>
                <button onMouseOver={this.changeState}>click me to change the state</button>

            </div>
        )
    }
}
export default StateComponent;