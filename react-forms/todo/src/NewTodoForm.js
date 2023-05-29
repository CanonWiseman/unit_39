import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = (props) =>{
    //Vars
    const INITIAL_VALUES = {
        item: ""
    }
    //end Vars

    //state
    const [formData, setFormData] = useState(INITIAL_VALUES)
    //end state

    //funcs
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
        ...fData,
        [name]: value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newItem = {
            item: formData.item,
            id: uuid()
        }
        props.addTodo(newItem);
        setFormData(INITIAL_VALUES);
    }
    //end funcs

    //html
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Enter Todo Item:</label>
            <input
                id="item"
                name="item"
                type="text"
                placeholder="enter Todo"
                value={formData.item}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewTodoForm;