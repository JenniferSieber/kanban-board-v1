import { useState } from "react";
import { Task } from "../utils/data-tasks";
import {
  lowPriorityIcon,
  mediumPriorityIcon,
  highPriorityIcon,
} from "../utils/icon-svgs";

const TaskCard = ({
  task,
  updateTask,
}: {
  task: Task;
  updateTask: (task: Task) => void;
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const points = task.points || 0;

  const updatePoints = (direction: "up" | "down") => {
    const fib = [0, 1, 2, 3, 5, 8, 13];
    const index = fib.indexOf(points);
    const nextIndex = direction === "up" ? index + 1 : index - 1;
    const newPoints = fib[nextIndex];
    if (newPoints) {
      updateTask({ ...task, points: newPoints });
    }
  };

  return (
    <div
      draggable
      className="border rounded-lg px-2 m-2 bg-gray-50 w-60"
      onDragStart={(e) => {
        e.dataTransfer.setData("id", task.id);
      }}
    >
      <div className="text-base font-semibold text-gray-700 py-2 text-center">
        {isEditingTitle ? (
          <input
            type="text"
            autoFocus
            className="w-full"
            onBlur={() => setIsEditingTitle(false)}
            value={task.title}
            onChange={(e) => updateTask({ ...task, title: e.target.value })}
          />
        ) : (
          <div onClick={() => setIsEditingTitle(true)}>{task.title}</div>
        )}
      </div>

      <div className="flex text-sm justify-between py-2">
        <div className="flex gap-2">
          <span>{task.id}</span>
          {task.priority === "high" ? (
            <span className="flex text-center capitalize">
              {highPriorityIcon}
            </span>
          ) : null}
          {task.priority === "medium" ? (
            <span className="text-center capitalize">{mediumPriorityIcon}</span>
          ) : null}
          {task.priority === "low" ? (
            <span className="text-center capitalize">{lowPriorityIcon}</span>
          ) : null}
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={() => updatePoints("down")}>-</button>
          <span className="font-bold ">{points}</span>
          <button onClick={() => updatePoints("up")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
