import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable,of } from 'rxjs';
import { Generalinfo } from '../model/generalinfo';
import { ISQuestion } from '../model/isquestion';
import { UiSetting } from '../model/uisetting';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  selectedOrNot=new BehaviorSubject(0);
 ginfoSub=new BehaviorSubject(new Generalinfo());//to get ginfo
 isquestionSub=new BehaviorSubject(new ISQuestion()); //to get isquestion
 subTarget=new BehaviorSubject("");
 subUisetting=new BehaviorSubject(new UiSetting());
 activeTime=new BehaviorSubject(0);
 questionForpreview=new BehaviorSubject<ISQuestion[]>(null);//Saving question for preview
 series:any;
  constructor(){
  }

  // addQuestionList(question:string){
  //   this.questionSub.next(question);
  // }
  // addGinfo(getinfo:Generalinfo){
  //   this.activeTime.next(getinfo.activeTime);
  //    this.subginfo.next(getinfo);
  // }
  addTargetAudience(target:string,uiset:UiSetting){
   this.subTarget.next(target);
   this.subUisetting.next(uiset);
  }

}
