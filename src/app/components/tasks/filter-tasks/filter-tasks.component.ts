import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: 'filter-tasks.component.html',
  styleUrls: ['filter-tasks.component.scss']
})
export class FilterTasksComponent {
@Output() showCompletedOutput = new EventEmitter<boolean>();

showCompleted:boolean = false;


// todo input met ngModel en changed uitzoeken

showCompletedEmitterFunction(showCompleted: boolean) {
  this.showCompletedOutput.emit(showCompleted)
  console.log('i am the showcompletedemitterfunction and i have outputted:', showCompleted);
}

}
