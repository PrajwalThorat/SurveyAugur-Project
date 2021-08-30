import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import {catchError, window} from 'rxjs/operators';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { Generalinfo } from '../../model/generalinfo';
import { InActiveSurvey } from '../../model/inactivesurvey';
import { ISQuestion } from '../../model/isquestion';
import { SurveyType } from '../../model/SurveyType';
import { UiSetting } from '../../model/uisetting';
import { SurveyService } from '../../services/survey.service';
import {throwError} from "rxjs";


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],

})
export class PreviewComponent implements OnInit {

  public previewStyle:any;
  uiset:UiSetting;
  ginfo:Generalinfo;
  target:string;
  tagComplete:string;
  len:number;
  questionList:ISQuestion[]=[];
  constructor(private surveyService:SurveyService,private httpClient:HttpClient,private userInfo:UserinfoService,private router:Router) {

   }

  ngOnInit(): void {
    console.log(this.surveyService.ginfoSub.subscribe((data)=>{
    this.ginfo=data;
    for(let i=0;i<this.ginfo.tags.length;i++){
   if(i==0){
      this.tagComplete=this.ginfo.tags[i];
    }else{
      this.tagComplete=this.tagComplete+"   "+this.ginfo.tags[i]
    }
  }}))
    console.log(this.surveyService.subTarget.subscribe((data)=>{console.log(data);
    this.target=data["targetAudience"]}))
    console.log(this.surveyService.subUisetting.subscribe((data)=>{ this.uiset=data;
      console.log(this.uiset);
      this.previewStyle={fontStyle:this.uiset.style,fontSize:this.uiset.size,fontFamily:this.uiset.family
      }
  }))
  this.surveyService.questionForpreview.subscribe((data)=>{
    console.log(data);
    this.questionList=data;
  })

  }
 sendSurvey(){

  let url="/surveyauthor/api/v1/surveys/users/"+this.userInfo.userId;
  let inActiveSurvey=new InActiveSurvey();
   inActiveSurvey.title=this.ginfo.survey_title;
   inActiveSurvey.tags=this.ginfo.tags;
   inActiveSurvey.description=this.ginfo.description;
   inActiveSurvey.activeTime=this.ginfo.activeTime;
   inActiveSurvey.questions=this.questionList;
   inActiveSurvey.targetAudience=this.target;
   inActiveSurvey.ui_settings=this.uiset;
   inActiveSurvey.surveyType=SurveyType.Flat;
    this.httpClient.post<InActiveSurvey>(url,inActiveSurvey).pipe(catchError(this.handleError)).subscribe((data)=>{console.log(data)},(error)=>{
      console.log(error);

      this.router.navigateByUrl('/error',{state: {errorCode:error}})
    })
   
    this.router.navigate['/home/surveys'];
  }
  handleError(error:HttpErrorResponse) {
    return throwError(error.status)
  }

}
