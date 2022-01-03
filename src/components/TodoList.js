import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            {/* <button className="button-complete-task-button">
              <i classname="fa fa-check-stop"></i>
            </button>
            <button className="button-edit-task-button">
              <i classname="far fa-edit"></i>
            </button> */}
            <button
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              <div class="delete">X</div>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
