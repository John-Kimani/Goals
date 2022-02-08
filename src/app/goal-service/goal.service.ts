import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'//allows usage across the app
})
export class GoalService {

  getGoals(){
    return Goals
  }
  constructor() { }
}
