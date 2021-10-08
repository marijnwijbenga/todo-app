import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-modal-important-button',
  templateUrl: 'modal-important-button.component.html',
  styleUrls: ['modal-important-button.component.scss']
})
export class ModalImportantButtonComponent {
  @Input() taskImportant: boolean | undefined = false;
  @Input() task: TaskInterface = {title: '', important: false, completed: false}
  @Input() index: number = 0;
  @Output() updatedTaskImportant = new EventEmitter<object>();

  onClick(important: boolean, index: number) {
    this.updatedTaskImportant.emit({important, index})
  }
}
