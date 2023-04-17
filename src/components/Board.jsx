const Board = ({ allTasks, setAllTasks }) => {
  const pendingItems = allTasks.filter((item) => item.category === "pending");
  const ongoingItems = allTasks.filter((item) => item.category === "ongoing");
  const completedItems = allTasks.filter((item) => item.category === "completed");

  const handleMove = (item) => {
    const index = allTasks.findIndex((eachTask) => item.id === eachTask.id);
    const tempArray = [...allTasks];
    if (item.category === "pending") {
      tempArray[index].category = "ongoing";
    } else if (item.category === "ongoing") {
      tempArray[index].category = "completed";
    }
    setAllTasks(tempArray);
  };
 
  const handleDelete = (item) => {
    const index = allTasks.findIndex((eachTask) => eachTask.id === item.id);
    const temporaryArray = [...allTasks];
    temporaryArray.splice(index, 1);
    setAllTasks(temporaryArray);
  };
  
  return (
    <div id="taskBoard">
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Pending</h3>
        </div>
        <div className="taskItems">
       
          {pendingItems.map((item, index) => (
            <div className="taskItem" key={index}>
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
          {ongoingItems.map((item, index) => (
            <div className="taskItem" key={index}>
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
          {completedItems.map((item, index) => (
            <div className="taskItem" key={index}>
              <p>{item.task}</p>
              <button className="taskButton delete" onClick={() => {handleDelete(item) }}>
              
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
