import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';

/** Renders a Task */
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  /** The task to display. */
  @Input() task!: Task;
  /** Event emitted when the task is completed. */
  @Output() onDone = new EventEmitter<Task>();
  /** Event emitted when the task should be edited. */
  @Output() onEdit = new EventEmitter<Task>();
  /** Event emitted when the task should be removed. */
  @Output() onRemove = new EventEmitter<Task>();

  constructor() {
  }

  /** Initializes the component. */
  ngOnInit(): void {
  }

  /** triggers the task as done event. */
  done() {
    this.onDone.emit(this.task);
  }

  /** triggers the task as edit event. */
  edit() {
    this.onEdit.emit(this.task);
  }

  /** triggers the task as remove event. */
  remove() {
    this.onRemove.emit(this.task);
  }

}
