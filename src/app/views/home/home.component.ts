import { Component, Input} from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  constructor(
    private taskService: TaskService
  ) {
  }

  openItems: number = 0;
  tasks = this.taskService.get();
  @Input() showCompleted: boolean = false;

  openTasks(): number {
    return this.openItems = this.tasks.filter(item => !item.completed).length;
  }


}
