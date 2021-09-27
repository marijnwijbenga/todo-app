import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() task: TaskInterface = {title: '', important: false, completed: false};
  @Input() index: number = 0;

  @Output() taskOutput = new EventEmitter<{task: TaskInterface, index: number}>();

  showCheckmark = false;

  completeTask(task: TaskInterface, index: number): void {
    this.task.completed = true;
    this.taskService.update(this.task, index);
  }

  openInModal(task: TaskInterface, index: number) {
    this.taskOutput.emit({task, index});
  }
}
