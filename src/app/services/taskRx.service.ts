// build a services to maange the tasks
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';
import { _tasklistMock } from 'src/assets/mocks/tasks.mock';

/** Service to manage the tasks. */
@Injectable({
  providedIn: 'root'
})
export class TaskRxService {
  /** The order to sort by. */
  sortOrder: 'asc' | 'desc' = 'asc';

  private _tasklist = _tasklistMock;
  /** Local tasklist to display. */
  private tasklist = new BehaviorSubject(this._tasklist);
  /** Public tasklist to display. */
  tasklist$ = this.tasklist.asObservable();

  constructor() { }

  /** emits the next value of the tasklist. */
  _update() {
    this.tasklist.next(this._tasklist);
  }

  /** Adds a new task to the tasklist. */
  add(task: Task) {
    this._tasklist.push(task);
    this._update();
  }

  /** Sets the task as done. */
  done(index: number, task: Task) {
    this._tasklist[index].done = !task.done;
    this._update();
  }

  /** edits the task. */
  edit(index: number, task: Task) {
    this._tasklist.splice(index, 1, task);
    this._update();
  }
  /** removes the task. */
  remove(index: number) {
    this._tasklist.splice(index, 1);
    this._update();
  }
  /** removes all the tasks. */
  removeall(onlydone: boolean = true) {
    if (onlydone)
      this._tasklist = this._tasklist.filter(task => !task.done);
    else
      this._tasklist = [];

    this._update();
  }

  /** sorts the by a property */
  sort(sortBy: keyof Task) {
    this._tasklist.sort((a, b) => {
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
    this._tasklist.forEach(task => task.done = true);
    this._update();
  }
}