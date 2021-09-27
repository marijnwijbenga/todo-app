import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../../interfaces/task.interface';
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
  task: TaskInterface = {title: '', important: false, completed: false};

  onFocusIn(): void {
    this.showSubmitButton = true;
  }

  saveTask(): TaskInterface {
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
