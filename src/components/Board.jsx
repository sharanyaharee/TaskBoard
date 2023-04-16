import React from "react";
import { useState } from "react";
import { data } from "../utils/data";

const Board = ({ pendingList, setPendingList }) => {
  const [ongoingList, setOngoingList] = useState(data.tasks);
  const [completedList, setCompletedList] = useState(data.tasks);

  const pendingItems = pendingList.filter(
    (item) => item.category === "pending"
  );
  const ongoingItems = ongoingList.filter(
    (item) => item.category === "ongoing"
  );
  const completedItems = completedList.filter(
    (item) => item.category === "completed"
  );
  //const [pendingList, setPendingList] = useState(data.tasks);
  //const [allTask,setAllTask] = useState(data.tasks)
  
  const [pendingToOngoing,setPendingToOngoing] = useState(ongoingItems)
  const [pendingListFiltered,setPendingListFiltered] = useState(pendingItems)

  

  const handleDelete = (index) => {
    const deletedList = completedItems.filter((item, i) => {
      return i !== index;
    });
    setCompletedList(deletedList);
    console.log(completedList)
  };

  const updateStatus = (index) => {
    const moveItem = pendingItems.filter((item, i) => {
      return i !== index;
    });
    // setPendingToOngoing([{...pendingToOngoing,moveItem}])
    setPendingListFiltered(moveItem)
    // console.log(pendingListFiltered);
  };
  // const moveItem = pendingList[index];
  // setPendingList(pendingList.filter((task,i)=> i !== index))
  // setOngoingList([...ongoingItems, moveItem]);

  //   console.log(ongoingList)
  // console.log(moveItem)}

  // });
  // setOngoingList([{...ongoingItems,moveItem}]);
  //   let moveItems= pendingList;
  // moveItems = moveItems.map(items=>{
  //   if(items.id===id)
  //   {items.category =newStatus
  //     setCompletedList(...completedList, items)
  //     }
  //     return items
  //  })

  //  setOngoingList(...ongoingItems, )

  //   const handleNewMove = (index) => {
  //     const itemsMove = tasks[index];
  //     setTasks(tasks.filter((task, i) => i !== index));
  //     setOngoingTasks([...onGoingTasks, itemsMove]);
  //     console.log(onGoingTasks);
  //   };

  //   console.log(ongoingItems);
  // };

  return (
    <div id="taskBoard">
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Pending</h3>
        </div>
        <div className="taskItems">
          {pendingListFiltered.map((item, index) => (
            <div className="taskItem" key={index}>
              <p>{item.task}</p>
              <span>{item.category}</span>
              <button
                className="taskButton move"
                onClick={() => updateStatus(index)}
              >
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
          {pendingToOngoing.map((item, index) => (
            <div className="taskItem" key={index}>
              <p>{item.task}</p>
              <button className="taskButton move">Move</button>
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
              <button
                className="taskButton delete"
                onClick={() => {
                  handleDelete(index);
                }}
              >
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
