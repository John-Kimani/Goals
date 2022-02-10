import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../qoute-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  addNewGoal(goal: any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
  // new goals function results to be pushed

  toggleDetails(index :any){
    this.goals[index].showDescription = !this.goals[index].showDescription
  }

  completeGoal(isComplete, index){
    if (isComplete){
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1)
        this.alertService.alertMe('The goal has been deleted')
      }
    }
  }

  goals:Goal[]
  alertService:AlertService;
  quote:Quote;
  
  constructor(goalService:GoalService, alertservice:AlertService, private quoteService: QuoteRequestService) {
    this.goals = goalService.getGoals()
    this.alertService = alertservice;
   }

  ngOnInit() {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
    // interface ApiResponse{
    //   author: string;
    //   quote: string;
    // }

    // this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe(data=>{
    //   //sucessfull API request
    //   this.quote = new Quote(data.author, data.quote)
    // }, err=>{
    //   this.quote = new Quote('Winston Churchill', 'Never never give up!')
    //   // alert('Hey')
    //   console.log('An error occured')
    // })
  }


}
// function toggleDetails(index: any): Goal {
//   throw new Error('Function not implemented.');
// }

