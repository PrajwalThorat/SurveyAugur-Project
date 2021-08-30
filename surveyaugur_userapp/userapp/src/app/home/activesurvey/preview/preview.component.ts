import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveSurveys } from '../model/activesurvey';
import { ASQuestions } from '../model/asquestion';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  active:ActiveSurveys=new ActiveSurveys();
  tagComp:string="";
  questionList:ASQuestions[]=[]
  constructor(private http:HttpClient,private router:ActivatedRoute,private survey:SurveyService) { }

  ngOnInit(): void {
    this.http.get("/surveyengine/api/v1/surveys/"+this.router.snapshot.params.id).subscribe((data:any)=>{
      console.log(data["result"])
      this.active=data["result"]
      for(let i=0;i<this.active.tags.length;i++){
        this.tagComp=this.tagComp+" "+this.active.tags[i]
      }
      this.questionList=this.active.questions;
      console.log(this.questionList);
      this.survey.activeTime.next(this.active.activeTime);
    })
  }

}
