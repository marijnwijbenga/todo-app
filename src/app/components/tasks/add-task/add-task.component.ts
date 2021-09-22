import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task.component.html',
  styleUrls: ['add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private taskService: TaskService) {

  }

  showSubmitButton: boolean = false;

  @Input() placeholder = '';

  taskTitle: string = '';
  important: boolean = false;
  task: TaskModel = {title: this.taskTitle, important: this.important, completed: false};

  onFocusIn(): void {
    this.showSubmitButton = true;
  }

  saveTask() {
    this.task = {
      title: this.taskTitle,
      important: this.important,
      completed: false
    };
    this.taskService.create(this.task);
    this.taskTitle = '';
  }
}
