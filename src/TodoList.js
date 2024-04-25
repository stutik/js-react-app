import { useState } from "react";

export default function TodoList() {
  const [item, setItem] = useState([]);
  const [task, setTask] = useState("");
  const onChangeTask = (e) => {
    setTask(e.target.value);
  };
  const addItem = () => {
    if (task !== "") {
      setItem([...item, task]);
      setTask("");
    }
  };
  const deleteButton = (index) => {
    console.log("delete button");
    const copyItem = item.slice();
    copyItem.splice(index, 1);
    setItem([...copyItem]);
  };

  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={onChangeTask}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {item.map((i, index) => {
          return (
            <li key={index}>
              {i}{" "}
              <button
                onClick={() => {
                  deleteButton(index);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
