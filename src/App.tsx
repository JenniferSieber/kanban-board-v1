// import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";

function App() {
  // const title = "Do Market Research"
  // const id = "BUS-1"
  // const points = 5
  return (
    <>
      <TaskCard title={"Do Market Research"} id={"BUS-1"} points={5} />
      <TaskCard title={"Competitor Analysis"} id={"BUS-2"} points={10} />
      <TaskCard title={"Develop Marketing Strategy"} id={"BUS-3"} points={15} />
      <TaskCard title={"React-y Card"} id={"BUS-4"} points={4} />
    </>
  );
}

export default App;
