import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, throwError} from 'rxjs';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { AddQues } from '../../model/addques';
import { ISQuestion } from '../../model/isquestion';
import { Question } from '../../model/question';
import { QuestionGroup } from '../../model/questiongroup';
import { SurveyService } from '../../services/survey.service';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {
  readMore:boolean[]=[];
  subject=new BehaviorSubject(new ISQuestion());
  questionList:ISQuestion[]=[];
  getQuestionurl:string
  addQues:AddQues[]=[];
  questionGroups:QuestionGroup[]=[];

  constructor(private survey:SurveyService,private userinfo:UserinfoService,private http:HttpClient,private router:Router) {

   }

  ngOnInit(): void {
   this.getQuestionurl="/surveyauthor/api/v1/questiongroups/users/"+this.userinfo.userId;
 
    this.http.get(this.getQuestionurl).pipe(catchError(this.handleError)).subscribe(
               (data:any)=>{
                           this.questionGroups=data["result"];
                           this.retrieveQuestion();
                    },
      (error)=>{
        console.log(error);

        this.router.navigateByUrl('/error',{state: {errorCode:error}})
      }
   )
      this.subject.subscribe((data)=>{this.questionList.push(data)})
  }
  retrieveQuestion(){
  try{
      let size=this.questionGroups.length;
      for(let i=0;i<size;i++){
      let url="/surveyauthor/api/v1/questions/questiongroups/"+this.questionGroups[i].questionGroupId;
      let add=new AddQues();
      add.questionGroup=this.questionGroups[i]
      this.http.get(url).pipe(catchError(this.handleError)).subscribe((data:any)=>{add.question=data["result"];
    console.log("in addq");
  console.log(add.question)},(error)=>{
        console.log(error);

        this.router.navigateByUrl('/error',{state: {errorCode:error}})
      })
      this.addQues.push(add)
      }
    }catch(err){
      console.log(err)
    }
  }

  get(question:Question){
   let isques=new ISQuestion();
   isques.id=question.id;
   isques.questionBody=question.questionBody;
   isques.questionType=question.questionType;
   isques.options=question.options;
   this.subject.next(isques);
   this.survey.isquestionSub.next(isques);
   this.survey.selectedOrNot.next(1);

  }
  handleError(error:HttpErrorResponse) {
    return throwError(error.status)
  }

}
