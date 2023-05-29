import React from "react";

const Todo = (props) =>{
    const handleRemove = () =>{
        props.removeTodo(props.item.id)
    }
    return(
        <div style={{marginBottom: "20px"}}>
            <p style={{display: "inline", marginRight: "20px"}}>{props.item.item}</p>
            <button onClick={handleRemove}>X</button>
        </div>
        
    )

}

export default Todo;