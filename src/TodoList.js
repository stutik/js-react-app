import { useState } from "react";

/*
"tesk 1"
[
  "Task1"(x)
  
]
*/

const TodoList = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [text, setText] = useState(); //text = "some value"

  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const addTodoButton = () => {
    if (!text === "") {
      setTodoItem([
        ...todoItem,
        { name: text, isCompleted: false, createdAt: new Date().getTime() },
      ]);

      setText("");
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
    setTodoItem([...copyTaskUpdate]);
  };
  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <input type="text" value={text} onChange={onTextChange} />
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
              {new Date(todo.createdAt).toLocaleString()}
            </li>
          );
        })}
      </ul>

      {/* <pre>{JSON.stringify(todoItem, null, 2)}</pre> */}
    </div>
  );
};

export default TodoList;
