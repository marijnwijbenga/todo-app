import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-modal-input',
  templateUrl: 'modal-input.component.html',
  styleUrls: ['modal-input.component.scss']
})
export class ModalInputComponent {
  @Input() task: TaskInterface = {title: '', important: false, completed: false};
}
