import Image from "next/image";

const TodoItem = ({ todo, toggleTodo, deleteTodo, userSession }) => {
  return (
    <>
      {userSession ? (
        <>
          <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => toggleTodo(todo._id)}
            className='mr-2'
          />
          <span >{todo.todolist}</span>
          <button
            onClick={() => deleteTodo(todo._id)}
            className="ml-2 px-2 py-1"
          >
            <Image src="/assets/icons/delete.svg"
              alt="delete_btn"
              width={12}
              height={12}
            />
          </button>
        </>
      ) : (
        <>
          <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => {}}
            className='mr-2'
          />
          <span>{todo.todolist}</span>
        </>
      )}
    </>
  )
}

export default TodoItem