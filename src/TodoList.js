import { useEffect, useState } from "react";

const useStorage = () => {
  const get = () => {
    const str = localStorage.getItem("TASKS");
    return str ? JSON.parse(str) : [];
  };

  const set = (data) => {
    const str = JSON.stringify(data);
    localStorage.setItem("TASKS", str);
  };

  return { get, set };
};

const TodoList = () => {
  const { get, set } = useStorage();
  const [item, setItem] = useState(get());
  const [task, setTask] = useState();
  const onValueChange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {}, [set, item]);

  const onClickAddTask = () => {
    if (task !== "") {
      setItem([
        ...item,
        { name: task, isCompleted: false, isCreated: new Date().getTime() },
      ]);
      setTask("");
    }
  };
  const onDeleteTask = (index) => {
    const copyTaskUpdate = item.slice();
    copyTaskUpdate.splice(index, 1);
    setItem([...copyTaskUpdate]);
  };
  const onValueChecked = (e, index) => {
    const copyTaskUpdate = item.slice();
    copyTaskUpdate[index].isCompleted = e.target.checked;
    setItem([...copyTaskUpdate]);
  };
  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Add task"
        onChange={onValueChange}
        value={task || ""}
      />
      <button onClick={onClickAddTask}>Add</button>
      <ul>
        {item.map((i, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                onChange={(e) => {
                  onValueChecked(e, index);
                }}
                checked={i.isCompleted}
              />
              {i.name}
              <button
                onClick={() => {
                  onDeleteTask(index);
                }}
              >
                Delete
              </button>
              <i>{new Date(i.isCreated).toLocaleString()}</i>
            </li>
          );
        })}
      </ul>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
};
export default TodoList;
