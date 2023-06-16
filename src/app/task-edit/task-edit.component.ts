import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditTaskData } from '../models/task.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  @ViewChild('taskForm', { static: true }) form!: NgForm;

  constructor(
    private dialogRef: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditTaskData) { }

  /** Initializes the component. */
  ngOnInit(): void {
    if (this.data.task) {
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

    this.dialogRef.close({
      title,
      description,
      priority
    });
  }

}
