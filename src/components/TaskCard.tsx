// import from App the Type definitions for Task
import { Task } from "../utils/data-tasks"


// updated the task prop to look at task: Task
const TaskCard = ({task}: {
  task: Task
}) => {
  
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50 w-60">
      <div className="text-base font-semibold text-gray-700 py-2 text-center">{task.title}</div>
      <div className="flex text-sm justify-between py-2">
        <div>{task.id}</div>
        {/* <div>{task.status}</div> */}
        <div>{task.points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
