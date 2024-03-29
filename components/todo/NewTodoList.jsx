'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import TodoForm from './TodoForm'
import TodoItem from './TodoItem';

const TodoList = () => {

    const { data: session } = useSession();

    // intial todo
    const [todos, setTodos] = useState([]);
    // temporary todo so when reset, I doesn't to call the api again.
    // const [tempTodos, setTempTodos] = useState([])

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
            // setTodos([...todos, {
            //     _id: null,
            //     todolist: todolist,
            //     isComplete: false,
            //     __v: 0
            //   }]);
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
                if (todo._id === id) {
                    return { ...todo, isComplete: updatedTodo.isComplete }
                    // return { ...todo, isComplete: !todo.isComplete}
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
            {/* <h1 className="text-2xl font-bold mb-4">Todo List</h1> */}
            {session?.user ? (
                <>
                    <TodoForm addTodo={addTodo} user={session?.user.name} />

                    <ul>
                        {todos.map((todo) => (
                            <li key={todo._id} className={todo.isComplete ? "line-through" : ""}>
                                <TodoItem
                                    todo={todo}
                                    toggleTodo={toggleTodo}
                                    deleteTodo={deleteTodo}
                                    userSession={true}
                                />
                            </li>
                        ))}
                    </ul>
                </>

            ) : (
                <ul>
                {todos.map((todo) => (
                    <li key={todo._id} className={todo.isComplete ? "line-through" : ""}>
                        <TodoItem
                            todo={todo}
                            toggleTodo={() => {}}
                            deleteTodo={() => {}}
                            userSession={false}
                        />
                    </li>
                ))}
            </ul>
            )}

        </>
    )
}

export default TodoList