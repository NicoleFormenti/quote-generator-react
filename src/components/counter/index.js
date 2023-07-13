import { useState } from "react";
import './file.css'
//you need useState when you will change or update a value/state
//counter component

function Counter() {
    //initialize the state variable called counter

//these are another way of declaring a function, we could also write a normal function
    const [counter, setCounter] = useState(0);
    const increaseCount  = () => {
        setCounter(counter +1);
    }
    const decreaseCount  = () => {
        setCounter(counter -1);
    }
    const addTwo = ()=>{
        setCounter(counter +2);
    }
    const divideByThree = () =>{
        setCounter(counter /3);
    }
    const resetButton = () =>{
        setCounter(0);
    }
    return (
        <div className="counter" style={{padding: '50px'}}>
            {counter}
            <button className="increase" style={{margin:'10px'}} onClick={increaseCount}>Increase</button>
            <button className="decrease" style={{margin:'10px'}} onClick={decreaseCount}>Decrease</button>
            <button className="add" style={{margin:'10px'}} onClick={addTwo}>Add 2</button>
            <button className="divide" style={{margin:'10px'}} onClick={divideByThree}>Divide by 3</button>
            <button className="reset" style={{margin:'10px'}} onClick={resetButton}>Reset</button>
        </div>
    )
}

export default Counter;