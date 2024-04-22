import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [item, setItem] = useState([]);

  const itemList = (e) => {
    setTask(e.target.value);
  };
  const addItem = () => {
    setItem([...item, task]);
  };
  return (
    <div className="todoList">
      <h1>Todo List</h1>
      <input onChange={itemList} type="text" placeholder="Add Task" />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {item.map((i) => {
          return (
            <li>
              <input type="checkbox" /> {i}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
