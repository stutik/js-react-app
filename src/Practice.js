import { useState } from "react";

const Practice = () => {
  const [item, setItem] = useState([]);
  const [task, setTask] = useState();
  const typeTask = (e) => {
    setTask(e.target.value);
  };
  const addTask = () => {
    if (!task == "") {
      setItem([
        ...item,
        { name: task, isCompleted: false, createdAt: new Date().getTime() },
      ]);
      setTask("");
    }
  };
  const onDeleteTask = (index) => {
    const copyTaskUpdate = item.slice();
    copyTaskUpdate.splice(index, 1);
    setItem([...copyTaskUpdate]);
  };
  const taskCompleted = (e, index) => {
    const copyTaskUpdate = item.slice();
    copyTaskUpdate[index].isCompleted = e.target.checked;
    setItem([...copyTaskUpdate]);
  };
  return (
    <div className="todoList">
      <h1>todo task</h1>
      <input
        type="text"
        placeholder="Add task"
        value={task}
        onChange={typeTask}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {item.map((i, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                onChange={(e) => {
                  taskCompleted(e, index);
                }}
                checked={i.isCompleted}
              />
              {i.name}
              <button
                onClick={() => {
                  onDeleteTask(index);
                }}
              >
                Delete task
              </button>
              {new Date(i.createdAt).toLocaleString()};
            </li>
          );
        })}
      </ul>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
};

export default Practice;
