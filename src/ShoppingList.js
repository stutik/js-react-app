import { useState } from "react";

const ShoppingList = () => {
  const [item, setItem] = useState([]);
  const [task, setTask] = useState();

  const ValueOnChange = (e) => {
    setTask(e.target.value);
  };
  const onClickAdd = () => {
    if (!task === "") {
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
  const checkOnChange = (e, index) => {
    const copyTaskUpdate = item.slice();
    copyTaskUpdate[index].isCompleted = e.target.checked;
    setItem([...copyTaskUpdate]);
  };
  return (
    <div className="todoList">
      <h1>Shopping List</h1>
      <input
        type="text"
        onChange={ValueOnChange}
        value={task}
        placeholder="Add task"
      />
      <button onClick={onClickAdd}>Add</button>
      <ul>
        {item.map((i, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={i.isCompleted}
                onChange={(e) => {
                  checkOnChange(e, index);
                }}
              />
              {i.name}
              <button
                onClick={() => {
                  onDeleteTask(index);
                }}
              >
                delete
              </button>
              <em>{new Date(i.createdAt).toLocaleString()}</em>
            </li>
          );
        })}
      </ul>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
};
export default ShoppingList;
