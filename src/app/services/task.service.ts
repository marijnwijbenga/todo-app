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
      important: task.important
    })
  }

  //get all tasks
  get():TaskModel[] {
    return this.tasks
  }


  //update task

  //delete task

  //get single task
}
