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
    this.tasks[index] = {
      title: task.title,
      completed: task.completed,
      important: task.important
    }
    return task;
  }

  //delete task

  //get single task
}
