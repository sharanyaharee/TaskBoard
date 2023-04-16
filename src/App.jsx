
import './App.scss'
import Board from './components/Board'
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import { data } from './utils/data'
import { useState } from 'react'

function App() {
  const [pendingList, setPendingList] = useState(data.tasks);


  return (
    <div className="App">
      <Header />
      <TaskForm pendingList={pendingList} setPendingList={setPendingList} />
      <Board pendingList={pendingList} setPendingList={setPendingList}/>
    <Footer />

    </div>
  )
}

export default App


