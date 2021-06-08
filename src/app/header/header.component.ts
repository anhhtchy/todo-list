import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "My To Do List"
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(inputTask: any): void {
    this.taskService.addTask(inputTask);
  }
}
