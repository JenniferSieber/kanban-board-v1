import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import { Status, statuses, Task } from "./utils/data-tasks";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // State
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentlyHoveringOver, setCurrentlyHoveringOver] =
    useState<Status | null>(null);

  // Define Columns
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });

  // Get Tasks from db on Mount
  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  // Update Task Function within the Card Component
  const updateTask = (task: Task) => {
    // Get task from db for PUT request
    fetch(`${API_URL}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });
    setTasks(updatedTasks);
  };

  // Drag Event Function handleDrop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    setCurrentlyHoveringOver(null);
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };

  // Drag Event Function handleDragEnter
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
            <div className="w-30 gap-10 flex justify-between text-3xl p-2 font-bold  text-blue-900">
              <h2 className="capitalize">{column.status}</h2>
              {column.tasks.reduce(
                (total, task) => total + (task?.points || 0),
                0
              )}
            </div>

            <div
              className={`h-full ${
                currentlyHoveringOver === column.status ? "bg-gray-200" : ""
              }`}
            >
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} updateTask={updateTask} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
