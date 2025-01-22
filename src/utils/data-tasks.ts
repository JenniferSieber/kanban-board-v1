// Create type for Status
export type Status = "todo" | "in-progress" | "done"

export type Priority = "low" | "medium" | "high"

export type Task = {
  title: string;
  id: string;
  status: Status,
  priority: Priority,
  points?: number;
};

// Create a Statuses Array to Loop through
export const statuses: Status[] = ['todo', 'in-progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']


// Add Status to define column for the task
export const tasks: Task[] = [
  {
    title: "Task 1 Example",
    id: "BUS-1",
    status: "todo",
    priority: "medium",
    points: 1,
  },
  {
    title: "Task 2 Example",
    id: "BUS-2",
    status: "done",
    priority: "low",
    points: 10,
  },
  {
    title: "Task 3 Example",
    id: "BUS-3",
    status: "in-progress",
    priority: "high",
    points: 15,
  },
  {
    title: "Task 4 Example",
    id: "BUS-4",
    status: "todo",
    priority: "high",
    points: 0,
  },
  {
    title: "Task 5 Example",
    id: "BUS-5",
    status: "todo",
    priority: "low",
    points: 5,
  },
  {
    title: "Task 6 Example",
    id: "BUS-6",
    status: "done",
    priority: "high",
    points: 6,
  },
  {
    title: "Task 7 Example",
    id: "BUS-7",
    status: "in-progress",
    priority: "medium",
    points: 7,
  },
  {
    title: "Task 8 Example",
    id: "BUS-8",
    status: "todo",
    priority: "low",
    points: 8,
  },
];
