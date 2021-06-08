import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  @Input()
  tasks!: Task[];
  @Output() onDoneTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  doneTask(taskId: number): void {
    this.onDoneTask.emit(taskId);
  }
}
