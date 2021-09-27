import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: 'filter-tasks.component.html',
  styleUrls: ['filter-tasks.component.scss']
})
export class FilterTasksComponent {
@Output() showCompleted = new EventEmitter<boolean>();

// todo input met ngModel en changed uitzoeken

toggleShowCompleted(showCompleted: boolean) {
  this.showCompleted.emit(showCompleted)
}

}
