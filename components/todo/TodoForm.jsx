'use client';

import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 mb-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo..."
                className="border border-gray-300 rounded-md p-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
        </form>
    )
}

export default TodoForm