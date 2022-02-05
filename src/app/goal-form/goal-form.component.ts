import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Goal } from '../goal'; //enable data binding from model

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,'','', new Date());
  //adds event emitter and declares function
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
