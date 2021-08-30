import { Injectable } from '@angular/core';
import {UUID} from "angular2-uuid";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Question} from "./question";
import { UserinfoService } from 'src/app/service/userinfo.service';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class QuestiongroupserviceService {
  // userId:UUID='74ba1ba6-9cc4-4737-953e-a96fd2df8d70';

  private save='/surveyauthor/api/v1/questiongroups/users/';
  private getQuesGrpByCreator='/surveyauthor/api/v1/questiongroups/users/';
  private updateqQesGrp='/surveyauthor/api/v1//questiongroups/';
  private getQuesGrpByQId='/surveyauthor/api/v1/questiongroups/';
  private getQuestionByQuesGrpId='/surveyauthor/api/v1/questions/questiongroups/';
  private deleteQuesByQuesId='/surveyauthor/api/v1/questions/';
  private updateQuesByQuesId='/surveyauthor/api/v1/questions/{question_id}';
  constructor(private http:HttpClient, private userinfo:UserinfoService) {

  }
  getByUserId():Observable<any[]>{
    return this.http.get<any[]>(this.getQuesGrpByCreator+this.userinfo.userId).pipe(catchError(this.handleError));
  }
  getByQuesGrpId(qGrpId:UUID):Observable<any>{
    return this.http.get<any>(this.getQuesGrpByQId+qGrpId).pipe(catchError(this.handleError));
  }
  saveQuestionGrp(quesGrp:Object){
    return this.http.post(this.save+this.userinfo.userId,quesGrp).pipe(catchError(this.handleError));
  }
  updateQuesGrp(quesGrpId:UUID,quesGrp:Object){
    return this.http.put(this.updateqQesGrp+quesGrpId,quesGrp).pipe(catchError(this.handleError));
  }
  getQuestionsByQuesGrpId(quesGrpId:UUID):Observable<any[]>{
    return this.http.get<any[]>(this.getQuestionByQuesGrpId+quesGrpId).pipe(catchError(this.handleError));
  }
  deleteQuestionById(quesId:UUID){
    return this.http.delete(this.deleteQuesByQuesId+quesId).pipe(catchError(this.handleError));
  }
  updateQuestionById(quesId:UUID,question:Question){
    return this.http.put(this.updateQuesByQuesId+quesId,question).pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse) {
    return throwError(error.status)
  }
}
