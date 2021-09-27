import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../interfaces/task.interface';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent  {

  @Input() task: TaskInterface = {title: '', important: false, completed: false};
  @Input() index: number = 0;

}
