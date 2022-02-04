export class Goal {
    // id: number;
    // name: string;
    // description: string;
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string)/*public is an access keyword*/{
       /*this is also an access keyword*/ this.showDescription=false; //enables description to be hidden
    }//constructior fuction with arguements to display
}
