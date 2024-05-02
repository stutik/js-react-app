import { useState } from "react";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [todoUpdate, setTodoUpdate] = useState();

  const todoInputValue = (e) => {
    setTodoUpdate(e.target.value);
  };
  const addTodoButton = () => {
    if (!todoUpdate == "") {
      setTodoItem([...todoItem, { name: todoUpdate, isCompleted: false }]);
      setTodoUpdate("");
    }
  };
  const deleteTodoTask = (index) => {
    const copyTaskUpdate = todoItem.slice();
    copyTaskUpdate.splice(index, 1);
    setTodoItem([...copyTaskUpdate]);
  };
  const taskCompleted = (e, index) => {
    const copyTaskUpdate = todoItem.slice();
    copyTaskUpdate[index].isCompleted = e.target.checked;
    setTodoUpdate([...copyTaskUpdate]);
  };
  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <input type="text" value={todoUpdate} onChange={todoInputValue} />
      <button onClick={addTodoButton}>Add Todo</button>
      <ul>
        {todoItem.map((todo, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                onChange={(e) => {
                  taskCompleted(e, index);
                }}
                checked={todo.isCompleted}
              />
              {todo.name}
              <button
                onClick={() => {
                  deleteTodoTask(index);
                }}
              >
                Delete task
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
