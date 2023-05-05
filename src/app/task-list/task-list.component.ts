import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  /** The tasklist to display. */
  tasklist: Task[];
  /** Whether to show only the done tasks. */
  showonlyundone: boolean = false;

  constructor(private taskService: TaskService, private dialogService: MatDialog) {
    this.tasklist = this.taskService.tasklist;
  }

  /** Initializes the component. */
  ngOnInit(): void {
  }

  /** launches the add task dialog. */
  add() {
    const dialog = this.dialogService.open(TaskEditComponent, {
      data: {}
    });
  }

  /** Sets the task as done. */
  done(index: number, task: Task) {
    this.tasklist[index].done = !task.done;
  }

  /** edits the task. */
  edit(index: number, task: Task) {
    const dialog = this.dialogService.open(TaskEditComponent, {
      data: {
        task,
        index
      }
    });

  }
  /** removes the task. */
  remove(index: number) {
    this.taskService.remove(index);
  }

  /** sorts the by a property */
  sort(sortBy: keyof Task) {
    this.taskService.sort(sortBy);
  }

  /** Sets the task as done. */
  checkall() {
    this.taskService.checkall();
  }

  /** shows or hide done tasks. */
  showall() {
    this.showonlyundone = !this.showonlyundone;
  }

  /** removes all done tasks. */
  removeall() {
    this.tasklist = this.taskService.removeall();
  }
}
