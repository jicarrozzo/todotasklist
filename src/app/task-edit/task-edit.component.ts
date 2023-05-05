import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditTaskData, Task } from '../models/task.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';



@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  @ViewChild('taskForm', { static: true }) form!: NgForm;

  constructor(
    private dialogRef: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditTaskData,
    private taskService: TaskService) {
    // console.log(data);

  }

  ngOnInit(): void {
    if (this.data.task) {
      // console.log(this.data.task);
      const values = {
        title: this.data.task.title,
        description: this.data.task.description,
        priority: this.data.task.priority
      };
      setTimeout(() => {
        this.form.setValue(values);
      }, 10);
    }
  }

  /** Adds a new task to the tasklist. */
  confirm(form: NgForm) {
    const { title, description, priority } = form.value;

    if (!this.data.task)
      this.taskService.add({
        title,
        description,
        done: false,
        date: new Date(),
        priority
      } as Task);
    else
      this.taskService.edit(this.data.index!, {
        ...this.data.task!,
        title,
        description,
        priority
      });

    this.dialogRef.close();
  }

}
