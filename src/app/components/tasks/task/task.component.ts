import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../../interfaces/task.interface';
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

  @Input() task: TaskInterface = {title: '', important: false, completed: false}
  @Input() index: number = 0;

  showCheckmark = false;
  showCompleted: boolean = true;

  completeTask(task: TaskInterface, index: number): void {
    this.task.completed = true;
    this.taskService.update(this.task, index);
  }

}
