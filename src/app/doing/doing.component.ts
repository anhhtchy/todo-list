import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})

export class DoingComponent implements OnInit {
  tasks!: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
  doneTask(taskId: number): void {
    this.taskService.doneTask(taskId);
  }
}
