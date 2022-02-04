export class Goal {
    // id: number;
    // name: string;
    // description: string;
    public showDescription: boolean;//allows access across app
    constructor(public id: number, public name: string, public description: string, public completeDate: Date)/*public is an access keyword*/{
       /*this is also an access keyword*/ this.showDescription=false; //enables description to be hidden
    }//constructior fuction with arguements to display
}
