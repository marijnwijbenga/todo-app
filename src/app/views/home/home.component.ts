import { Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  tasks: TaskInterface[] = [];

  openItems: number = 0;
  showModal: boolean = false;
  @Input() showCompleted: boolean = false;

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.taskService.get$().subscribe(
      (tasks: TaskInterface[]) => {
        this.tasks = tasks;
      },
      () => {

      }
    );
  }

  get filteredTasks(): TaskInterface[] {
    // if() {
    //
    // }
    return this.tasks;
  }

  get openTasks(): number {
    return this.openItems = this.tasks.filter(item => !item.completed).length;
  }

}
