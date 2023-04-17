import { useState } from "react";

const TaskForm = ({allTasks, setAllTasks} ) => {
  const [newTask, setNewTask] = useState([]); 

  const handleInputTask = () => {
    newTask && setAllTasks([ ...allTasks,{id:allTasks.length + 1, category: "pending", task: newTask }]);
    setNewTask(""); 
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
