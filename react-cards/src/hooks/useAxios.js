import React, {useState} from "react";
import axios from 'axios';
import {v4 as uuid} from "uuid";

async function useAxios(url, initialState = []){
    const [data, setData] = useState(initialState);

    const addData = async () => {
        const response = await axios.get(
          url
        );
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }    
    return [data, addData]
}

export default useAxios;