import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-modal-save-button',
  templateUrl: 'modal-save-button.component.html',
  styleUrls: ['modal-save-button.component.scss']
})
export class ModalSaveButtonComponent {
  @Input() task: TaskInterface = {title: '', important: false, completed: false}

}
