
import { useContext } from "react";
import { TaskContext } from "../contexts/taskContext";


import { useState } from "react";
const TaskForm = () => {
  const {state,dispatch} =useContext(TaskContext)
  const [newTask, setNewTask] = useState(""); 
 

  const handleInputTask = () => {
    const task= { id:state.length + 1,
      category: "pending", 
      task: newTask }
      setNewTask("")
   dispatch ({type:"SUBMIT_TASK",payload:task});
  }
 
  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          type="text"
          className="taskInput"
          placeholder="Enter New Task.."
          onChange={(e) => setNewTask(e.target.value)} 
          value={newTask} 
          />
        <button onClick={handleInputTask} className="taskSubmit">  
          Submit
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
