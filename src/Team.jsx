import { useState } from "react"

export default function Team (){
    const [count, setCount] = useState(11);

    //Event Handelar
    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount (newCount)
    }

    const handleRemove = ()=>{
      
        setCount (count - 1)
    }

    const teamStyle = {
        border : '2px solid gray',
        margin : "15px",
        padding : "15px"
    }
    const buttonStyle = {
        background: 'Gray',
        margin : "5px"
    }
    return (

        <div style={teamStyle}>
                <h2>Team : {count} </h2>
                <button onClick={handleAdd} style={buttonStyle}>Add</button>
                <button onClick={handleRemove} style={buttonStyle}>Remove</button>
        </div>
    )
}