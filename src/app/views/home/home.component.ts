import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  tasks: TaskInterface[] = [];
  task: TaskInterface = {title: '', important: false, completed: false};
  openItems: number = 0;
  showModal: boolean = false;
  showCompleted: boolean = false;
  tempTitle: string = '';
  tempImportant: boolean = false;
  tempIndex: number = 99999999999999;

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
    return this.tasks.filter(task => !task.completed);
  }

  get amountOpenTasks(): number {
    return this.openItems = this.tasks.filter(item => !item.completed).length;
  }

  showCompletedTasks(showCompleted: boolean) {
    this.showCompleted = showCompleted;

    console.log(this.showCompleted);
  }

  openInModal(eventObject: any) {
    this.showModal = true;
    this.task = eventObject.task;
    this.index = eventObject.index;
  }

  saveTask(task: TaskInterface, index: number): TaskInterface {
    this.showModal = false;
    return this.taskService.update(task, index);
  }

  closeModal() {
    this.showModal = false;
  }

  updateTaskImportant(eventObject: any): void {

    console.log(eventObject);
  }

  updateTaskTitle(eventObject: any): void {

    console.log(eventObject);
  }
}
