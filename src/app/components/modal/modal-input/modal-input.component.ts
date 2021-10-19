import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskInterface } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-modal-input',
  templateUrl: 'modal-input.component.html',
  styleUrls: ['modal-input.component.scss']
})
export class ModalInputComponent {
  @Input() task: TaskInterface = {title: '', important: false, completed: false}
  @Input() taskTitle: string = '';
  @Input() index: number = 0;
  @Output() updatedTaskTitle = new EventEmitter<object>();

  updateTaskTitle(taskTitle: string, index: number) {
    this.updatedTaskTitle.emit({taskTitle, index});
  }

}
