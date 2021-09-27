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
  task: TaskInterface = {title: '', important: false, completed: false}
  openItems: number = 0;
  showModal: boolean = false;
  showCompleted: boolean = false;

  index: number = 0;

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
    // if (this.showCompleted) {
    //   return this.tasks = this.tasks.filter(item => item.completed);
    // } else {
    //   this.tasks = this.tasks.filter(item => !item.completed);
    //   return this.tasks;
    // }
    console.log('why so many');
    return this.tasks.filter(item => !item.completed);
  }

  get amountOpenTasks(): number {
    return this.openItems = this.tasks.length;
  }

  showCompletedTasks(showCompleted: boolean) {
    this.showCompleted = showCompleted;
    console.log(this.showCompleted);
  }

  openModal(eventObject: any) {
    this.showModal = true;
    this.task = eventObject.task
    this.index = eventObject.index;
  }

}
