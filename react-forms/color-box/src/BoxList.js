import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const Boxlist = () =>{
    //state setting area
    const [boxes, setBoxes] = useState([]);
    //end state setters

    //functions area
    function addBox(newBox){
        const newBoxArr = [...boxes, newBox];
        setBoxes(newBoxArr);
    }

    function removeBox(id){
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }
    //end functions area
    
    //html
    return(
        <>
            <h1>Fill out form for the box</h1>
            <NewBoxForm addBox={addBox}/>
            {boxes.map(box => (
                <Box removeBox={removeBox} id={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} key={box.id}/>
            ))}
        </>
    )

}

export default Boxlist;