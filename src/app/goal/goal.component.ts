import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    //{id:1,  name:'Watch finding Nemo', description:'Find an online version and watch merlin find his son'},
    // {id:2,  name:'Buy Cookies', description:'I have to buy cookies for the parrot'},
    //{id:3,  name:'Get new Phone Case', description:'Tracy has her birthday coming up soon'},
    //{id:4,  name:'Get Dog Food', description:'Kiwi likes expensive snacks'},
    //{id:5,  name:'Solve math homework', description:'Damn Math'},
    //{id:6,  name:'Plot my world domination plan', description:'Cause I am an evil overload'},

    new Goal(1, 'Watch findin Nemo', 'Find an online version and watch merlin find his son'),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new Goal(3, 'Get new Phone Case', 'Tracy has her birthday coming up soon'),
    new Goal(4, 'Get Dog Food', 'Kiwi likes expensive snacks'),
    new Goal(5, 'Solve Math homework', 'Damn Math'),
    new Goal(6, 'Plot my word domination plan', 'Cause I am an evil overload'),

  ]
  toggleDetails(index :any){
    this.goals[index].showDescription = !this.goals[index].showDescription
  }

  completeGoal(isComplete, index){
    if (isComplete){
      this.goals.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
// function toggleDetails(index: any): Goal {
//   throw new Error('Function not implemented.');
// }

