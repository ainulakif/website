'use client';

import { useState, useEffect } from 'react';

const TodoList = ({ submitted }) => {

    const static_request= process.env.STATIC_REQUEST;

    // initial todo
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // temp todo
    const [tempTodos, setTempTodos] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/todolist', {
                method: 'GET'
            });
            const data = await response.json();
            
            setTodos(data);
            setTempTodos(data);
            // const todoOutput =todos?.[0]?.todolist?.map(item => item).join(', ');
            // setTempTodos([todoOutput]);
            
        }

        fetchPosts();
    }, []);

    // console.log("current id: ", todos?.[0]?._id)
    useEffect(() => {
        const todoOutput = tempTodos?.[0]?.todolist?.map(item => item).join(', ');
            // console.log("useeffect temptodos: "+ todoOutput);
    }, [tempTodos]);

    const currentTodos = () => {
        const todoOutput = todos?.[0]?.todolist?.map(item => item).join(', ');
        // setTempTodos(todoOutput);
        // console.log("Current todos: " + todoOutput);
    }

    const submitTodos = async (e) => {
        if (!(tempTodos?.[0]?.todolist?.length > 0)) {
            alert("list cannot be empty!");
            return;
          }
          
        e.preventDefault();
        setSubmitting(true);

        //const todoOutput = tempTodos?.[0]?.todolist?.map(item => item).join(', ');
        //console.log("Before submit result: ", todoOutput)
        try {
            const response = await fetch('/api/todolist', {
                method: 'PUT',
                body: JSON.stringify({
                    todolist: tempTodos[0].todolist
                })
            })

        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }

        setTodos(tempTodos);
        console.log("After submit result: ", todos)
    }

    const resetTodos = () => {
        setTempTodos(todos);
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            // setTempTodos([...tempTodos, newTodo]);
            const updatedTodolist = [...(tempTodos[0]?.todolist ?? []), newTodo];
            setTempTodos([{ ...tempTodos[0], todolist: updatedTodolist }, ...tempTodos.slice(1)]);
            setNewTodo('');
        }
    };

    const removeTodo = (index) => {
        const updatedTodolist = tempTodos[0].todolist.filter((_, i) => i !== index);
        setTempTodos([{ ...tempTodos[0], todolist: updatedTodolist }, ...tempTodos.slice(1)]);
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
                {/* {todos?.[0]?.todolist?.map((todo, index) => ( */}
                {tempTodos?.[0]?.todolist.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={tempTodos?.[0]?.todolist?.length > 0 ? submitTodos : null}>Submit</button>
            <button onClick={resetTodos}>Reset</button>
            <button onClick={currentTodos}>Show</button>
        </div>
    );
};

export default TodoList;