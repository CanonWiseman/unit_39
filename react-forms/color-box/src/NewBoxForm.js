import React, { useState } from "react";
import {v4 as uuid} from "uuid";

const NewBoxForm = (props) => {
    //variables
    const INITIAL_VALUES = {
        width: "",
        height: "",
        backgroundColor: ""
    }
    //end variables

    //state
    const [formData, setFormData] = useState(INITIAL_VALUES)
    //end state

    //functions
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const box = {
            id: uuid(),
            height: formData.height,
            width: formData.width,
            backgroundColor: formData.backgroundColor
        }

        props.addBox(box);
        setFormData(INITIAL_VALUES);
    }
    //end functions

    //html
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Enter Height:</label>
            <input
                id="height"
                name="height"
                type="number"
                placeholder="enter height in PX"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width">Enter Width:</label>
            <input
                id="width"
                name="width"
                type="number"
                value={formData.width}
                placeholder="enter width in PX"
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Enter Background Color:</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                type="backgroundColor"
                value={formData.backgroundColor}
                placeholder="enter valid background color"
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
    
}

export default NewBoxForm;