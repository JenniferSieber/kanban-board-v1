import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import {
  Status,
  tasks as initialTasks,
  statuses,
  Task,
} from "./utils/data-tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [currentlyHoveringOver, setCurrentlyHoveringOver] =
    useState<Status | null>(null);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });
    setTasks(updatedTasks);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    setCurrentlyHoveringOver(null);
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };

  const handleDragEnter = (status: Status) => {
    setCurrentlyHoveringOver(status);
  };

  return (
    <>
      <div className="flex divide-x">
        {columns.map((column) => (
          <div
            key={column.status}
            onDrop={(e) => handleDrop(e, column.status)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => handleDragEnter(column.status)}
          >
            <div className="flex justify-between text-3xl p-2 font-bold  text-blue-900">
              <h2 className="capitalize">{column.status}</h2>
              {column.tasks.reduce(
                (total, task) => total + (task?.points || 0),
                0
              )}
            </div>

            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} updateTask={updateTask} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
