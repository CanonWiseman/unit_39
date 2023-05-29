import React from "react";

const Box = (props) => {
    let height = parseInt(props.height);
    let width = parseInt(props.width);

    const removeBox = (id) =>{
        props.removeBox(id);
    }

    return (
        <>
            <div style={{width: width, height: height, backgroundColor: props.backgroundColor}}></div>
            <p onClick={() =>removeBox(props.id)}>X</p>
        </>
        
    )
}

export default Box;