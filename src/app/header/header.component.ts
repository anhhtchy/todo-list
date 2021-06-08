import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "My To Do List"
  @Output() onAddTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(inputTask: any): void {
    this.onAddTask.emit(inputTask);
  }
}
