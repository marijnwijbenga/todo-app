import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskInterface } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-modal-input',
  templateUrl: 'modal-input.component.html',
  styleUrls: ['modal-input.component.scss']
})
export class ModalInputComponent {
  @Input() task: TaskInterface = {title: '', important: false, completed: false}
  @Input() index: number = 0;

  taskTitle = new FormControl(this.task.title);

  getTitle(): void {
    this.
  }

}
