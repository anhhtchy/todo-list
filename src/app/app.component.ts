import { Component } from '@angular/core';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [
    {
      id: 0,
      title: 'Học HTML',
    },
    {
      id: 1,
      title: 'Học CSS',
    },
    {
      id: 2,
      title: 'Học JavaScript',
    },
    {
      id: 3,
      title: 'Học Angular',
    },
  ];
  doneTask(taskId: number): void {
    // alert("Done task " + id);
    const id = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(id, 1);
  }
  addTask(inputTask: any): void {
    let maxId = this.tasks.reduce(function (a, b) {
      return a.id > b.id ? a : b;
    }).id;
    this.tasks.push({
      id: maxId+1,
      title: inputTask.value,
    });
    inputTask.value = '';
  }
}
