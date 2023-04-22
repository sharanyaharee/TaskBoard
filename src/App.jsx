import "./App.scss";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskContextWrapper from "./contexts/taskContext";
// import { data } from "./utils/data";
// import { useState ,useContext} from "react";

function App() {
  
  // const [allTasks, setAllTasks] = useState(data.tasks);
  return (
    <div className="App">

      <Header />
      <TaskContextWrapper>
      <TaskForm />
      <Board  />
      </TaskContextWrapper>
      <Footer />
    </div>
  );
}

export default App;
