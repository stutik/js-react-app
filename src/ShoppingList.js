import { useState } from "react";

export default function ShoppingList() {
  const [itemValue, setItemValue] = useState([]);
  const [taskUpdate, setTaskUpdate] = useState("");
  //const itemValue = ["bread", "milk"];
  const onValueChange = (e) => {
    setTaskUpdate(e.target.value);
  };
  const onAddList = () => {
    if (!taskUpdate == "") {
      setItemValue([...itemValue, { name: taskUpdate, isCompleted: false }]);
      setTaskUpdate("");
    }
  };

  const taskCompleted = (e, index) => {
    const copyTaskUpdate = itemValue.slice();
    copyTaskUpdate[index].isCompleted = e.target.checked;
    setTaskUpdate([...copyTaskUpdate]);
  };

  const onDeleteItem = (index) => {
    const copyTaskUpdate = itemValue.slice();
    copyTaskUpdate.splice(index, 1);
    setItemValue([...copyTaskUpdate]);
  };

  return (
    <div className="todoList">
      <h1>Shopping List</h1>
      <input
        type="text"
        onChange={onValueChange}
        value={taskUpdate}
        placeholder="Add Shopping List"
      />
      <button onClick={onAddList}>Add List</button>
      <ul>
        {itemValue.map((i, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={i.isCompleted}
                onChange={(e) => {
                  taskCompleted(e, index);
                }}
              />
              {i.name}
              <button
                onClick={() => {
                  onDeleteItem(index);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
