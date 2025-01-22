import { useState } from "react"
import { Task } from "../utils/data-tasks"
const lowPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
</svg>
const mediumPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14h14" />
</svg>
const highPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>


const TaskCard = ({task, updateTaskPoints}: {
  task: Task
  updateTaskPoints: (task: Task, points: number) => void
}) => {
  // const [points, setPoints] = useState(task.points || 0)
  const points = task.points || 0
 
  
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50 w-60">
      <div className="text-base font-semibold text-gray-700 py-2 text-center">
        {task.title}
      </div>
      <div className="flex text-sm justify-between py-2">
        <div className="flex gap-2">
          <span>{task.id}</span>
            {task.priority === "high" ? <span className="flex text-center capitalize">{highPriorityIcon}</span> : null}
            {task.priority === "medium" ? <span className="text-center capitalize">{mediumPriorityIcon}</span> : null}
            {task.priority === "low" ? <span className="text-center capitalize">{lowPriorityIcon}</span> : null}
        </div>
        <div className="flex gap-2 items-center">
          
          <button onClick={() => updateTaskPoints(task, points-1)}>-</button>
            <span className="font-bold ">{points}</span>
          <button onClick={() => updateTaskPoints(task, points+1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
