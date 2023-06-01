import React from "react";

const Card = (props) =>{
    return(
        <>
            <img src={props.card.image} alt={props.card.code}/> 
        </>
    )
}

export default Card;
