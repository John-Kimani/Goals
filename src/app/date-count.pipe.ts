import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //helps to get the current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDay()) //helps get todays date in yyyy/mm/dd format
    var dateDifference = Math.abs(value - todayWithNoTime)//return value in milliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts milisencond to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else {
      return 0;
    }
  }

}
