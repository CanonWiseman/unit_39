import React, {useState} from "react";
import axios from 'axios';
import {v4 as uuid} from "uuid";

async function useAxios(url, initialState = []){
    const [state, setState] = useState(initialState);

    const addData = async () =>{

    }

    return [state, addData]
}

export default useAxios;