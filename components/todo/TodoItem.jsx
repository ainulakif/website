import React from 'react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
        <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => toggleTodo(todo._id)}
        />
        <span>{todo.title}</span>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </li>
  )
}

export default TodoItem