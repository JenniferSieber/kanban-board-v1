// Move Task Type Object to its own file
export type Task = {
  title: string;
  id: string;
  points?: number;
};

// Moved the tasks array to TaskCard from App
export const tasks: Task[] = [
  {
    title: "Task 1 Example",
    id: "BUS-1",
    points: 5,
  },
  {
    title: "Task 2 Example",
    id: "BUS-2",
    points: 10,
  },
  {
    title: "Task 3 Example",
    id: "BUS-3",
    points: 15,
  },
  {
    title: "Task 4 Example",
    id: "BUS-4",
    points: 20,
  },
];
