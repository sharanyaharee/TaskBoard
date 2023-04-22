 import { useContext } from "react";
import { TaskContext } from "../contexts/taskContext";


 const Board = () => {
  let {state,dispatch} = useContext(TaskContext)
   const pendingItems= state.filter((item) => item.category === "pending");
  const ongoingItems = state.filter((item) => item.category === "ongoing");
  const completedItems = state.filter((item) => item.category === "completed");

  const handleMove = (item) => {
    const index = state.findIndex((eachTask) => item.id === eachTask.id);

    const tempArray = [...state];
    if (item.category === "pending") {
      tempArray[index].category = "ongoing";
  
    } else if (item.category === "ongoing") {
      tempArray[index].category = "completed";
      
    }
    
    dispatch({type: "MOVE_TASK", payload :tempArray})
  };
 
  const handleDelete = (item) => {
    let temporaryArray = [...state];
    const index = state.findIndex((eachTask) => eachTask.id === item.id);
   temporaryArray.splice(index, 1);
   dispatch({type: "DELETE_TASK", payload :temporaryArray})
 
    
    }
   
 
  

  
  return (
    <div id="taskBoard">
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Pending</h3>
        </div>
        <div className="taskItems">
       
          {pendingItems.map((item, id) => (
            <div className="taskItem" key={id}>
              <p>{item.task}</p>
              <button className="taskButton move" onClick={() => handleMove(item)}>
                Move
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Ongoing</h3>
        </div>
        <div className="taskItems">
          {ongoingItems.map((item, id) => (
            <div className="taskItem" key={id}>
              <p>{item.task}</p>
              <button className="taskButton move" onClick={() => handleMove(item)}>
                
                Move
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Completed</h3>
        </div>
        <div className="taskItems">
          {completedItems.map((item, id) => (
            <div className="taskItem" key={id}>
              <p>{item.task}</p>
              <button className="taskButton delete" onClick={() => {handleDelete(item)}}>
                
              
                Delete
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
