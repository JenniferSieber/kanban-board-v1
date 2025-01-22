// import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { Task } from "./data-tasks"


function App() {
  const mainTitle = "Main Title Example"
  const task: Task = {
    title: mainTitle,
    id: "BUS-1",
    points: 5,
  }
  
  return (
    <>
      <TaskCard task={task} />
    </>
  );
}

export default App;
