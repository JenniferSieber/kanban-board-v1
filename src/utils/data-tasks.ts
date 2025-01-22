// Create type for Status
export type Status = "todo" | "in-progress" | "done"

export type Task = {
  title: string;
  id: string;
  status: "todo" | "in-progress" | "done",
  points?: number;
};

// Create a Statuses Array to Loop through
export const statuses: Status[] = ['todo', 'in-progress', 'done']


// Add Status to define column for the task
export const tasks: Task[] = [
  {
    title: "Task 1 Example",
    id: "BUS-1",
    status: "todo",
    points: 5,
  },
  {
    title: "Task 2 Example",
    id: "BUS-2",
    status: "done",
    points: 10,
  },
  {
    title: "Task 3 Example",
    id: "BUS-3",
    status: "in-progress",
    points: 15,
  },
  {
    title: "Task 4 Example",
    id: "BUS-4",
    status: "todo",
    points: 20,
  },
  {
    title: "Task 5 Example",
    id: "BUS-5",
    status: "todo",
    points: 5,
  },
  {
    title: "Task 6 Example",
    id: "BUS-6",
    status: "done",
    points: 6,
  },
  {
    title: "Task 7 Example",
    id: "BUS-7",
    status: "in-progress",
    points: 7,
  },
  {
    title: "Task 8 Example",
    id: "BUS-8",
    status: "todo",
    points: 8,
  },
];
