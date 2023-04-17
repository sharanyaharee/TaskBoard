const Board = ({  // Props well received on Board Component ;)
  pendingItems,
  ongoingItems,
  completedItems,
  setCompletedItemList,
  setPendingItemList,
  setOngoingItemList,
}) => {  
  const handleDelete = (taskIndex) => { // Deleting Completed Task on Delete Button Click
    const deletedList = completedItems.filter((item, index) => {
      return index !== taskIndex; //  comparing the index of the item to be deleted with index of each item on completed Tasks Array using filter function.
    });
    setCompletedItemList(deletedList); //  once both the index values found equal Filter function exits and the (rest of the ) unmatched index Tasks are stored to a new array
  };//  on exit of filter function new Array is stored to updated completed Task State using its setter Function
 
  const updatePendingStatus = (item, newStatus) => { // function defined to move Pending tasks to Ongoing Tasks state
    let moveItems = pendingItems; // assigning Pending Task Array to a temp array
    moveItems = moveItems.map((items) => { // mapping the temp array.
      if (items.task === item) {  // once the array item id matches with the id of the item to be moved (ie. id which is received as function parameter) 
        items.category = newStatus; // new status "ongoing" is assigned to the category key's value
        setOngoingItemList([...ongoingItems, items]); // updating the ongoing task state by adding new task to the existing ongoing tasks by spreading the ongoing tasks array
      }
      const remainingPendingList = pendingItems.filter((item) => {
        return item.task !== items;
      }); //  removing the moved task from Pending task array by sorting it out with filter function
      setPendingItemList(remainingPendingList); // updating pending list item with remaining task Array returned by filter function
    });
  };

  const updateOngoingStatus = (item, newStatus) => {  // function defined to move ongoing tasks to completed Tasks state
    let moveItems = ongoingItems; // assigning ongoing Task Array to a temp array
    moveItems = moveItems.map((items) => { // mapping the temp array.
      if (items.task === item) {  // once the array item.task matches with the item task to be moved 
        items.category = newStatus; // new status "completed" is assigned to the category key's value
        setCompletedItemList([...completedItems, items]);  // updating the completed task state by adding newly moved task to the existing completed tasks by spreading the completed tasks array
      }
      const remainingOngoingList = ongoingItems.filter((item) => {
        return item.task !== items;
      });  //  removing the moved task from ongoing task array by sorting it out with filter function
      setOngoingItemList(remainingOngoingList);// updating  ongoing task list item with remaining Array returned by filter function
    });
  };

  return (
    <div id="taskBoard">
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Pending</h3>
        </div>
        <div className="taskItems">   {/* mapping ongoing task items Array to destructure the taskName */}
          {pendingItems.map((item, index) => (  
            <div className="taskItem" key={index}> 
              <p>{item.task}</p>
              <button
                className="taskButton move"
                onClick={() => updatePendingStatus(item.task, "ongoing")} > {/* Button onClick evokes the updatePendingStatus function, passing task name and Status message as arguments */}
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
          {ongoingItems.map((item, index) => ( //mapping ongoing task items Array to destructure the taskName
            <div className="taskItem" key={index}>
              <p>{item.task}</p>
              <button
                className="taskButton move"
                onClick={() => updateOngoingStatus(item.task, "completed")}>  {/* Button onClick evokes the updateOngoingStatus function, passing task name and status message as arguments */}
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
          {completedItems.map((item, index) => ( //mapping completed task items Array to destructure the taskName
            <div className="taskItem" key={index}>
              <p>{item.task}</p>
              <button
                className="taskButton delete"
                onClick={() => {
                  handleDelete(index);
                }}>  {/* Button onClick evokes the delete function, passing task indexj as arguments */}
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
