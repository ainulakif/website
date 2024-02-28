'use client';

import { useState } from 'react';

const TodoForm = ({ addTodo, user }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={"Add todo as " + user}
                className="border border-gray-300 rounded-l-md p-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Add</button>
        </form>
    )
}

export default TodoForm