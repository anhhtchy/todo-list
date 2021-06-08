import { Component, OnInit } from '@angular/core';
import { isThisTypeNode } from 'typescript';
import { Task } from '../model/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  doneTasks!: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.doneTasks = this.taskService.doneTasks;
  }

}
