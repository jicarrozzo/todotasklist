/** Defines the priority for the task. */
export const Priority = {
  Low: 'low',
  Medium: 'medium',
  High: 'high'
} as const;
/** Types for the priority of the task. */
export type Priority = typeof Priority[keyof typeof Priority];

/** Defines the task model. */
export interface Task {
  title: string;
  description: string;
  done: boolean;
  date: Date;
  priority: Priority;
}

/** Data to edit a task. */
export interface EditTaskData {
  task?: Task;
  index?: number;
}
