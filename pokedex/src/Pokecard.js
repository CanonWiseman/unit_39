import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    const imgAlt = `Image of ${props.name}`;
    return (
        <>
            <h4 className='Pokecard-title'>{props.name}</h4>
            <img className='Pokecard-image' src={imgSrc} alt={imgAlt}/>
            <p className='Pokecard-type'>{props.type}</p>
            <p className='Pokecard-experience'>EXP: {props.base_experience}</p>
        </>
    )
}

export default Pokecard;