// import from App the Type definitions for Task
import { Task } from "../utils/data-tasks"
const lowPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
</svg>
const mediumPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14h14" />
</svg>
const highPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>

// updated the task prop to look at task: Task
const TaskCard = ({task}: {
  task: Task
}) => {
  
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50 w-60">
      <div className="text-base font-semibold text-gray-700 py-2 text-center">
        {task.title}
      </div>
      <div className="flex text-sm justify-between py-2">
        <div className="flex gap-3">
          <span>{task.id}</span>
          {/* Add Validation Logic */}
            {task.priority === "high" ? <span className="flex text-center capitalize">{highPriorityIcon}</span> : null}
            {task.priority === "medium" ? <span className="text-center capitalize">{mediumPriorityIcon}</span> : null}
            {task.priority === "low" ? <span className="text-center capitalize">{lowPriorityIcon}</span> : null}
            {/* {task.priority === "high" ? <span className="text-center capitalize">{task.priority}⬆️</span> : null}
            {task.priority === "medium" ? <span className="text-center capitalize">{task.priority}⏸️</span> : null}
            {task.priority === "low" ? <span className="text-center capitalize">{task.priority}⬇️</span> : null} */}
            {/* {task.priority === "high" && <span>{task.priority}⬆️</span>}
            {task.priority === "medium" && <span>{task.priority}⏸️</span>}
            {task.priority === "low" && <span>{task.priority}⬇️</span>} */}
        </div>
        
        <div>{task.points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
