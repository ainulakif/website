'use client';

import { useState, useEffect } from 'react';

const TodoList = ({ submitted }) => {

    // initial todo
    const [todos, setTodoList] = useState(['test1', 'test2', 'test3']);
    const [newTodo, setNewTodo] = useState('');

    // temp todo
    // const tempTodos = setTodoList;
    const [tempTodos, setTempTodos] = useState(todos);

    useEffect(() => {
            alert("New submitted todos: "+ todos);
    }, [todos]);

    const currentTodos = () => {
        alert("Current todos: "+ todos);
    }

    const submitTodos = () => {
        setTodoList(tempTodos);
    }
    
    const resetTodos = () => {
        setTempTodos(todos);
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTempTodos([...tempTodos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index) => {
        const updatedTodoList = tempTodos.filter((_, i) => i !== index);
        setTempTodos(updatedTodoList);
    };

    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {tempTodos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={submitTodos}>Submit</button>
            <button onClick={resetTodos}>Reset</button>
            <button onClick={currentTodos}>Show</button>
        </div>
    );
};

export default TodoList;