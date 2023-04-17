import { useState } from "react";

const TaskForm = ({ setPendingItemList }) => {
  //Receiving PendingTasks state's setter Function as a prop
  const [newTask, setNewTask] = useState([]); //creating a state for storing input field Data
  const handleInputTask = () => {
    // Input Handling Function is defined to set the user submitted Input Data to the Pending Tasks state using its setter function
    newTask &&
      setPendingItemList((prev) => [
        { category: "pending", task: newTask },
        ...prev,
      ]);
    setNewTask(""); //clearing Input field by resetting value to the corresponding setter Function
  };

  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          type="text"
          className="taskInput"
          placeholder="Enter New Task.."
          onChange={(e) => setNewTask(e.target.value)} 
          // assigning a call back function to the OnChange Attribute of input field to update the state using setter function with the user entered input value
          value={newTask} //  updated state's value is assigned to Value attribute of input field
        />
        <button onClick={handleInputTask} className="taskSubmit">  {/* // HandleInput function is assigned to button Onclick */}
          Submit
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
