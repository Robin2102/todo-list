import React, { useEffect } from 'react';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? { title, id, completed } : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if(!editTodo){
        setTodos([...todos, { id: Math.random(), title: input, completed: false }]);
        setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
            className="task-input" 
            type="text" 
            placeholder="Add a Todo..."
            value={input} 
            onChange={inputChangeHandler}
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    );
};

export default Form;