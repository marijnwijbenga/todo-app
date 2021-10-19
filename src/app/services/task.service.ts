import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../constants/TASKS';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: TaskInterface[] = TASKS;

  create(task: TaskInterface): void {
    this.tasks.unshift({
      title: task.title,
      important: task.important,
      completed: false
    });
  }

  get$(): Observable<TaskInterface[]> {
    return of(this.tasks);
  }

  //update task
  update(task: TaskInterface, index: number): TaskInterface {
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
