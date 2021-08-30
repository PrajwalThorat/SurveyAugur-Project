import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-questionstepper',
  templateUrl: './questionstepper.component.html',
  styleUrls: ['./questionstepper.component.scss']
})
export class QuestionstepperComponent implements OnInit {
  selectedIndex: number = 0;
  enable:boolean=false;
  constructor(private survey:SurveyService) { }

  ngOnInit(): void {
    this.survey.selectedOrNot.subscribe((data)=>{if(data!=0){
      this.enable=true;
    };
    console.log(data)})
  }
  nextStep(tabName:string)
  {for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) 
       {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
       }
     }
  }
}
