'use client';

import { useState, useEffect } from 'react';

import TodoForm from './TodoForm'
import TodoItem from './TodoItem';

const TodoList = () => {

    // intial todo
    const [todos, setTodos] = useState([]);
    // temporary todo so when reset, I doesn't to call the api again.
    const [tempTodos, setTempTodos] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('api/todolist', {
                method: 'GET'
            });

            const data = await response.json();
            setTodos(data);
            // temporary todo here
        }

        fetchPosts();
    }, [])

    const addTodo = async (todolist) => {
        try {
            const response = await fetch('api/todolist', {
                method: 'POST',
                body: JSON.stringify({
                    todolist,
                    isComplete: false
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response.json()
                .then(data => console.log(data))
                .catch(error => console.error("Error parsing JSON:", error));
            // const newTodo = await response.json();
            // setTodos([...todos, newTodo]);
        } catch (error) {
            console.error("Error when adding item.", error.message);
        }
    }

    const toggleTodo = (id) => {

    }

    const deleteTodo = (id) => {

    }

    return (
        <>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </>
    )
}

export default TodoList