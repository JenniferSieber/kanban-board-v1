import { useState } from "react";
import "./App.css";


function App() {
  const title = "Do Market Research"
  const id = "BUS-1"
  const points = 5
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50">

      <div className="text-base font-semibold text-gray-700 py-2">
        {title}
      </div>
      <div className="flex justify-between py-2">
        <div>
          {id}
        </div>
        <div>Middle Element</div>
        <div>
          {points}
        </div>
      </div>
    </div>
  )
  
}

export default App;
