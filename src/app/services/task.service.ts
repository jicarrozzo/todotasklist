// build a services to maange the tasks
import { Injectable } from '@angular/core';
import { Task, Priority } from '../models/task.model';

/** Service to manage the tasks. */
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  /** The order to sort by. */
  sortOrder: 'asc' | 'desc' = 'asc';

  /** The tasklist to display. */
  tasklist: Task[] = [
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
  ];

  constructor() { }

  /** Adds a new task to the tasklist. */
  add(task: Task) {
    this.tasklist.push(task);
  }

  /** Sets the task as done. */
  done(index: number, task: Task) {
    this.tasklist[index].done = !task.done;
  }

  /** edits the task. */
  edit(index: number, task: Task) {
    this.tasklist.splice(index, 1, task);
  }
  /** removes the task. */
  remove(index: number) {
    this.tasklist.splice(index, 1);
  }
  /** removes all the tasks. */
  removeall(onlydone: boolean = true) {
    if (onlydone)
      this.tasklist = this.tasklist.filter(task => !task.done);
    else
      this.tasklist = [];

    return this.tasklist;
  }

  /** sorts the by a property */
  sort(sortBy: keyof Task) {
    this.tasklist.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return this.sortOrder === 'asc' ? 1 : -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return this.sortOrder === 'asc' ? -1 : 1;
      }
      return 0;
    });

    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  /** sets all the tasks as done */
  checkall() {
    //return this.tasklist.map(task => ({ ...task, done: true }));
    this.tasklist.forEach(task => task.done = true);
  }
}