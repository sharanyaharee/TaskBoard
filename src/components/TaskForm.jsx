import React from "react";
import { useState } from "react";

const TaskForm = ({ pendingList, setPendingList }) => {
  const [newItem, setNewItem] = useState([]);

  const handleInputTask = () => {
  newItem &&  setPendingList((prev) => [
      {  category: "pending", task: newItem },
      ...prev,
    ]);
    setNewItem("");
  };
 
  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          type="text"
          className="taskInput"
          placeholder="Enter New Task.."
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button onClick={handleInputTask} className="taskSubmit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
