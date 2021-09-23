import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task.component.html',
  styleUrls: ['add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private taskService: TaskService) {}

  @Input() placeholder: string = '';

  showSubmitButton: boolean = false;

  taskTitle: string = '';
  important: boolean = false;
  task: TaskModel = {title: '', important: false, completed: false};

  onFocusIn(): void {
    this.showSubmitButton = true;
  }

  saveTask(): TaskModel {
    this.task = {
      title: this.taskTitle,
      important: this.important,
      completed: false
    };
    this.taskService.create(this.task);
    this.taskTitle = '';
    return this.task;
  }
}
