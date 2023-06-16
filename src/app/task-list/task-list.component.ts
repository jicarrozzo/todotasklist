import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskRxService } from '../services/taskRx.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  /** Whether to show only the done tasks. */
  showonlyundone: boolean = false;

  /** The tasklist to display. */
  tasklist$ = this.taskService.tasklist$;
  /** The tasklist to display. */
  // tasklist: Task[] = this.taskService.tasklist;

  constructor(
    // private taskService: TaskService,
    private taskService: TaskRxService,
    private dialogService: MatDialog
  ) { }

  /** Initializes the component. */
  ngOnInit(): void {
  }

  /** launches the add task dialog. */
  add() {
    const dialog = this.dialogService.open(TaskEditComponent, {
      data: {}
    });

    dialog.afterClosed().subscribe((newTask: Task) => {
      if (newTask) {
        this.taskService.add({
          title: newTask.title,
          description: newTask.description,
          done: false,
          date: new Date(),
          priority: newTask.priority
        } as Task);
      }
    });
  }


  /** edits the task. */
  edit(index: number, task: Task) {
    const dialog = this.dialogService.open(TaskEditComponent, {
      data: {
        task,
        index
      }
    });
    dialog.afterClosed().subscribe((editedTask: Task) => {
      if (editedTask) {
        this.taskService.edit(index, {
          ...task!,
          title: editedTask.title,
          description: editedTask.description,
          priority: editedTask.priority
        });
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
  done(index: number, task: Task) {
    this.taskService.done(index, task);
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
    // this.tasklist = this.taskService.removeall();
    this.taskService.removeall(this.showonlyundone);
  }
}
