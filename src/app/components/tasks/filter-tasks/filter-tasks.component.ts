import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: 'filter-tasks.component.html',
  styleUrls: ['filter-tasks.component.scss']
})
export class FilterTasksComponent {
@Output() showCompletedOutput = new EventEmitter<boolean>();

showCompleted:boolean = false;

// pad =
  // 1. output showCompleted boolean via link vanuit filter-tasks.component.html
  // 2. vang out

// todo input met ngModel en changed uitzoeken

showCompletedEmitterFunction(showCompleted: boolean) {
  this.showCompletedOutput.emit(showCompleted)
  console.log('i am the showcompletedemitterfunction and i have outputted:', showCompleted);
}

}
