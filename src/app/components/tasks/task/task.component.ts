import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss']
})
export class TaskComponent {
  constructor(
    private taskService: TaskService
  ) {
  }

  @Input() task: TaskModel = {title: '', important: false, completed: false}
  @Input() index: number = 0;

  showCheckmark = false;

  completeTask(task: TaskModel, index: number): void {
    this.task.completed = true;
    this.taskService.update(this.task, index)
  }
}
