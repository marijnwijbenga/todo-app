import { Injectable } from '@angular/core';
import { TASKS } from '../CONSTANTS/TASKS';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: TaskModel[] = TASKS;

  // create task
  create(task: TaskModel): void {
    this.tasks.unshift({
      title: task.title,
      important: task.important,
      completed: false
    });
  }

  //get all tasks
  get(): TaskModel[] {
    return this.tasks;
  }

  //update task
  update(task: TaskModel, index: number): TaskModel {
    //todo get all values from the task in here and update all of them
    console.log(index);

    this.tasks[index].completed = task.completed;
    this.tasks[index].title = task.title;
    this.tasks[index].important = task.important;
    console.log(this.tasks[index]);
    return task;
  }

  //delete task

  //get single task
}
