import "./App.scss";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import { data } from "./utils/data";
import { useState } from "react";

function App() {
  const [pendingItemList, setPendingItemList] = useState(data.tasks);//state creation for List of  all Pending  Tasks
  const [ongoingItemList, setOngoingItemList] = useState(data.tasks);//state creation for List of all Ongoing Tasks
  const [completedItemList, setCompletedItemList] = useState(data.tasks); //state creation for List of all Completed Tasks

  const pendingItems = pendingItemList.filter(
    (item) => item.category === "pending"
  ); // Creating an array of Pending Tasks from Filtering the Pending Tasks State

  const ongoingItems = ongoingItemList.filter(
    (item) => item.category === "ongoing"
  ); // Creating an array of Ongoing Tasks from Filtering the Ongoing Tasks State

  const completedItems = completedItemList.filter(
    (item) => item.category === "completed"
  ); // Creating an array of Completed Tasks from Filtering the Completed Tasks State

  return (
    <div className="App">
      <Header />  {/* Rendering Header Component */}
      <TaskForm setPendingItemList={setPendingItemList} /> {/* Rendering TaskForm Component ,passing "Pending Tasks state's" setter Function as a prop */}
      <Board
        pendingItems={pendingItems}
        ongoingItems={ongoingItems}
        completedItems={completedItems}
        setCompletedItemList={setCompletedItemList}
        setPendingItemList={setPendingItemList}
        setOngoingItemList={setOngoingItemList}
      />   {/* Rendering Board Component , Passing 3 Categories of Task arrays and also their corresponding State's setter function as props */}
      <Footer /> {/* Rendering the Footer Component */}
    </div>
  );
}

export default App;
