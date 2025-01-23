// Define types for Status, Priority & Task
export type Status = "todo" | "in-progress" | "done"
export type Priority = "low" | "medium" | "high"
export type Task = {
  title: string;
  id: string;
  status: Status,
  priority: Priority,
  points?: number; // not required
};

// Define statuses & priorities
export const statuses: Status[] = ['todo', 'in-progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']
