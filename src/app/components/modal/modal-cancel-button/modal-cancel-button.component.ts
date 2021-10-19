import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-modal-cancel-button',
  templateUrl: 'modal-cancel-button.component.html',
  styleUrls: ['modal-cancel-button.component.scss']
})
export class ModalCancelButtonComponent {
  @Input() task: TaskInterface = {title: '', important: false, completed: false}
}
