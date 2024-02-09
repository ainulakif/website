import React from 'react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <>
        <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => toggleTodo(todo._id)}
        />
        <span>{todo.todolist}</span>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </>
  )
}

export default TodoItem