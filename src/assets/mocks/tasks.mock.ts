import { Priority, Task } from "src/app/models/task.model";

/** Mock of the tasklist. */
export const _tasklistMock: Task[] = [
  {
    title: 'Task 1',
    description: 'Description 1',
    done: false,
    date: new Date(),
    priority: Priority.Low
  },
  {
    title: 'Task 2',
    description: 'Description 2',
    done: true,
    date: new Date(),
    priority: Priority.Medium
  }
]