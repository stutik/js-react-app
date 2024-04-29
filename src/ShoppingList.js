import { useState } from "react";

export default function ShoppingList() {
  const [itemValue, setItemValue] = useState(["bread", "milk"]);
  const [taskUpdate, setTaskUpdate] = useState("");
  //const itemValue = ["bread", "milk"];
  const onValueChange = (e) => {
    setTaskUpdate(e.target.value);
  };
  const onAddList = () => {
    if (!taskUpdate == "") {
      setItemValue([...itemValue, taskUpdate]);
      setTaskUpdate("");
    }
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
              {i}
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
