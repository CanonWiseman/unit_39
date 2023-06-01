import React, {useState, useEffect, useRef } from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";
import Card from "./Card";

let deckOver = false;

const Deck = ({deckCount = 1}) => {
    function drawCardTimer(){
        if(deckTimerId.current === ""){
            deckTimerId.current = setInterval(() => {
                drawCard();
            }, 1000);
        }
        else{
            clearInterval(deckTimerId.current);
            deckTimerId.current = "";
        }
        
    }

    async function drawCard(){
        try{
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`);
            const newDeck = [...deck, res.data.cards[0]];
            console.log(res.data.remaining)
            if(res.data.remaining === 0){
                deckOver = true;
                clearInterval(deckTimerId.current);
                window.alert("Deck is finished");
            }
            setDeck(newDeck);
            
        }
        catch(e){
            console.log(e);
        }
    }

    const [deck, setDeck] = useState([]);

    let deckId = useRef();
    let deckTimerId = useRef("");

    useEffect(() => {
        return async function(){
            try{
                const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckCount}`);
                deckId.current = res.data.deck_id;
            }
            catch(e){
                console.log(e);
            }
        }
    }, []);

    return (
        <div>
            {deckOver ? null : <button onClick={drawCard}>Draw 1</button>}
            {deckOver ? null : <button onClick={drawCardTimer}>Draw 1 every second</button>}
            {deck.map(c =>(
                <Card card={c} key={uuid()}/>
            ))}
        </div>
        
    )

}

export default Deck;