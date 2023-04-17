import "./App.scss";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import { data } from "./utils/data";
import { useState } from "react";

function App() {
  const [allTasks, setAllTasks] = useState(data.tasks);
  return (
    <div className="App">
      <Header />
      <TaskForm allTasks={allTasks} setAllTasks={setAllTasks} />
      <Board allTasks={allTasks} setAllTasks={setAllTasks} />
      <Footer />
    </div>
  );
}

export default App;
