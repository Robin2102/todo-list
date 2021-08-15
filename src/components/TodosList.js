import React from 'react';

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const deleteItemHandler = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editItemHandler = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input 
                    className="list" 
                    type="text" 
                    value={todo.title}
                    onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className="button-edit task-button" onClick={() => editItemHandler(todo)}>edit</button>
                        <button className="button-delete task-button" onClick={() => deleteItemHandler(todo)}>X</button>
                    </div>
                </li>

            )
            )};
        </div>
    );
};

export default TodosList;