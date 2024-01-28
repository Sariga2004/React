/*difference between callback and memo:
it is very dangerous hook if we dont perform action properly*/
//why? It will directly be intact with your cache memory
//memo works based on  cache your entire fn written inside callback()
//taking something from cache by toggling or by rendering
/*-----------------------------Advantage--------------------------------------*/
//performance is drastically increasing
/*many call can come to the function but it will just retrive if from the 
cache it wont re render the entire component or <function></function>*/
import React, { useState, useCallback } from "react";

// const Callback = () => {
//     const [count, setCount] = useState(0);
    const Callback = () => {
        const [count, setCount] = useState(0);
        const list =[10,25,19,15]
        list.forEach(element =>{
            console.log(element) 
        }
         );
    // const handlingCallbackFunc = useCallback(() => {
    //     console.log(`button clicked if clicked print the count else don't print the count Count: ${count}`);
    // }, [count]);

    return (
        <div>
            <h1>This is callback example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>ADD one</button><br/><br/>
            {/* <button onClick={handlingCallbackFunc}>Callback count</button> */}
            <ol>
                {list.map((val,index)=>
                <li key={index}>{val}</li>)}
            </ol>
        </div>
    );
}

export default Callback;



