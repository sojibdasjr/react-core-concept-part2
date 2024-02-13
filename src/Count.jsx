import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    const handleAdd =()=>{
        const newCount = count +1;
        setCount (newCount) 
    }
    const handleReduce =()=>{
        const newCount = count -1;
        setCount (newCount) 
    }
    return (
        <div style={{border:'2px solid red'}}>
            <h2>Counter : {count} </h2>
            <button onClick={handleAdd} style={{border:"1px solid black", margin:'5px 6px'}}>+</button>
            <button onClick={handleReduce} style={{border:"1px solid black", margin:'5px 6px'}}>-</button>
        </div>
    );
};

export default Count;