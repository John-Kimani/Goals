import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    {id:1,  name:'Watch finding Nemo'},
    {id:2,  name:'Buy Cookies'},
    {id:3,  name:'Get new Phone Case'},
    {id:4,  name:'Get Dog Food'},
    {id:5,  name:'Solve math homework'},
    // {id:6,  name:'Plot my world domination plan'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
