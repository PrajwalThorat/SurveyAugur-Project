import { Component, OnInit } from '@angular/core';
import { ISQuestion } from '../../model/isquestion';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.scss']
})
export class QuestionlistComponent implements OnInit {
 questionList:ISQuestion[]=[]
 enable:boolean=false;
  constructor(private survey:SurveyService) { }

  ngOnInit(): void {
    this.survey.isquestionSub.subscribe((data)=>{
      this.questionList.push(data);
      if(this.questionList.length>1){
      this.enable=true;
      }
      console.log(data)})
  }
  deleteQ(i:number){
    if(i!==-1){
      this.questionList.splice(i,1)
      if(this.questionList.length>1){
        this.enable=true;
        }
        else{
          this.enable=false;
        }
    }

  }
  save(){
    
    this.survey.questionForpreview.next(this.questionList)
    
  }
  

}
