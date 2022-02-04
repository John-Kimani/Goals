import { Directive, ElementRef, HostListener } from '@angular/core'; //imports element ref then host listner

@Directive({
  selector: '[appStrikethrough]'//attribute directive
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef)//gives a private access to this directive
    { this.elem.nativeElement.style.textDecoration='line-through';
      }//elementref grants us acces to the DOM throught nativeelement property

  @HostListener('click') onClicks(){
    this.textDeco('line-through')
  }

  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('None')
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }//logic that creates strike through function
}
