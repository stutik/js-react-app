import { useState } from "react";

export default function Practice() {
  const [taskList, setTaskList] = useState([]); //['task1', 'task2'] -> [{},{},{}]
  const [taskUpdate, setTaskUpdate] = useState("");

  const TaskValue = (e) => {
    setTaskUpdate(e.target.value);
  };
  const AddTaskButton = () => {
    if (!taskUpdate == "") {
      setTaskList([...taskList, { name: taskUpdate, isCompleted: false }]);
      //[...prev, 'task1',] -> [...prev,{name:'task', isCompleted: false}]
      setTaskUpdate("");
    }
  };
  const DeleteTask = (index) => {
    const copyTaskUpdate = taskList.slice();
    copyTaskUpdate.splice(index, 1);
    setTaskList([...copyTaskUpdate]);
  };

  const onTaskCompleted = (e, index) => {
    const copyTaskUpdate = taskList.slice();
    copyTaskUpdate[index].isCompleted = e.target.checked;

    setTaskList([...copyTaskUpdate]);
  };
  return (
    <div className="todoList">
      <h1>Todo Task</h1>

      <input
        type="text"
        onChange={TaskValue}
        placeholder="Add Todo task"
        value={taskUpdate}
      />
      <button onClick={AddTaskButton}>Add Task</button>
      <ol>
        {taskList.map((i, index) => {
          return (
            <li key={index}>
              <input
                onChange={(e) => {
                  onTaskCompleted(e, index);
                }}
                checked={i.isCompleted} //incase of checked or unchecked
                type="checkbox"
              />
              {i.name}
              <button
                onClick={() => {
                  DeleteTask(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
      {/* <pre>{JSON.stringify(taskList, null, 2)}</pre> */}
    </div>
  );
}
