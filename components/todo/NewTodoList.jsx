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

    useEffect(() => {
        // console.log("full todos: ", todos);
        // console.log("todos: ", todos?.[0]?.isComplete);
    }, [todos])


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
            // response.json()
            //     .then(data => console.log(data))
            //     .catch(error => console.error("Error parsing JSON:", error));
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        } catch (error) {
            console.error("Error when adding item.", error.message);
        }
    }

    const toggleTodo = async (id) => {
        try {
            const response = await fetch(`/api/todolist/${id.toString()}`, {
                method: 'PUT',
                body: JSON.stringify({
                    isComplete: !todos.find((todo) => todo._id === id).isComplete
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const updatedTodo = await response.json();

            const updatingTodos = todos.map(todo => {
                if(todo._id === id) {
                    return { ...todo, isComplete: updatedTodo.isComplete}
                }
                return todo;
            });

            setTodos(updatingTodos);
        } catch (error) {
            console.error("Error when toggling item.", error.message)
        }
    }

    const deleteTodo = async (id) => {
        try {
            await fetch(`/api/todolist/${id.toString()}`, {
                method: 'DELETE'
            });

            const deletedItem = todos.filter((todo) => todo._id !== id);

            setTodos(deletedItem);

        } catch (error) {
            console.error("Error when deleting item.", error.message);
        }
    }
    return (
        <>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo._id}>
                        <TodoItem
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList