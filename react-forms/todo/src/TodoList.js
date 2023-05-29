import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () =>{
    //Vars

    //end Vars

    //state
    const [todoList, setTodoList] = useState([]);
    //end state

    //funcs
    function addTodo(item){
        const newTodoList = [...todoList, item];
        setTodoList(newTodoList);
    }

    function removeTodo(itemId){
        const newTodoList = todoList.filter(item => (item.id !== itemId))

        setTodoList(newTodoList);
    }
    //end funcs

    //html
    return (
        <>
            <NewTodoForm addTodo={addTodo}/>
            <h1>Todos</h1>
            {todoList.map(i =>(
                <Todo item={i} removeTodo={removeTodo} key={i.id}/>
            ))}
        </>
    )
}

export default TodoList;