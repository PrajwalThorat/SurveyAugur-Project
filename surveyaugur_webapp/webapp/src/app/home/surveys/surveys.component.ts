import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { ActiveSurveys } from './model/activeSurvey';
import { InActiveSurvey } from './model/inactiveSurvey';
import { MatTableDataSource } from "@angular/material/table";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {Router} from "@angular/router";
import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { PreviewComponent } from '../createsurvey/subcomponent/preview/preview.component';
import { ASQuestions } from './model/ASquestion';
import { ISQuestion } from '../createsurvey/model/isquestion';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class SurveysComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'updates', 'Actions'];
  dataSource: MatTableDataSource<ActiveSurveys>;
  dataSource1: MatTableDataSource<InActiveSurvey>;

  activeById: ActiveSurveys[] = [];
  inactiveSurvey: InActiveSurvey[] = [];
  activeSurvey: ActiveSurveys[] = []
  surveyId: any;
  activeSurveyId : any ;
  iSurveyTemp: InActiveSurvey;
  aSurveyTemp: ActiveSurveys;
  question: ASQuestions[] = [];
  iQuestion: ISQuestion[] = [];
  body: any;
  iSurveyBody : any;
  header: any;
  flag : any;

  constructor(private http: HttpClient, private user: UserinfoService,private router:Router,public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getInctiveSurveys();
    this.getActiveSurveys();

  }
  getById() {
    for (let i = 0; i < this.activeSurvey.length; i++) {
      if (this.activeSurvey[i].createdBy === this.user.userId) {
        this.activeById.push(this.activeSurvey[i]);
      }
    }
  }

  getInctiveSurveys() {
    this.http.get("/surveyauthor/api/v1/surveys/users/" + this.user.userId).pipe(catchError(this.handleError)).subscribe((data) => {
      this.inactiveSurvey = [];
      this.inactiveSurvey = data["result"];
      console.log(data);
      console.log(this.inactiveSurvey)
      this.dataSource1 = new MatTableDataSource<InActiveSurvey>(this.inactiveSurvey);

    },(error)=>{
      console.log(error);

        this.router.navigateByUrl('/error',{state: {errorCode:error}})
      })

  }

  getActiveSurveys() {
    this.http.get("/surveyengine/api/v1/surveys").pipe(catchError(this.handleError)).subscribe((data) => {
      console.log(data["result"])
      this.activeSurvey = data["result"]

      console.log(this.activeSurvey);
      this.activeById = [];
      this.getById()

      console.log(this.activeById)
      this.dataSource = new MatTableDataSource<ActiveSurveys>(this.activeById);
    },(error)=>{
      console.log(error);

        this.router.navigateByUrl('/error',{state: {errorCode:error}})
      })
  }
  handleError(error:HttpErrorResponse) {
    return throwError(error.status)
  }

   
  inactiveSurveyToActiveSurvey(){
    this.http.get("/surveyauthor/api/v1/surveys/"+ this.surveyId).subscribe((data) => {
      this.iSurveyTemp = data["result"];
    })
    setTimeout(()=>{this.addSurveyToActiveSurvey()},600);

  }

  addSurveyToActiveSurvey(){
    this.iQuestionToAQuestion();
    this.body = {
      "surveyTitle": this.iSurveyTemp.title,
      "tags": this.iSurveyTemp.tags,
      "description": this.iSurveyTemp.description,
      "targetAudience": this.iSurveyTemp.targetAudience,
      "activeTime": this.iSurveyTemp.activeTime,
      "createdBy": this.iSurveyTemp.createdBy,
      "questions": this.question,
      "uiSetting": null,
      "surveyUrl": null,
      "activatedBy": this.user.userId,
      "createdOn": this.iSurveyTemp.createdOn
      };
      this.header = { 'content-type': 'application/json'};
    this.http.post("/surveyengine/api/v1/surveys", this.body, {'headers' : this.header} ).subscribe(
      (data) => {
        if(data["status"]==200){
          this.deleteSurveyFromInactiveSurvey();
        }
      },
      (response) => {
        console.log("Error Ocurred While Post", response);
      }
    )
  }

  iQuestionToAQuestion(){
    this.question=[];
    for (let i = 0; i < this.iSurveyTemp.questions.length; i++) {
      var temp = {
        "id" : this.iSurveyTemp.questions[i].id,
        "questionBody" : this.iSurveyTemp.questions[i].questionBody,
        "questionType" : this.iSurveyTemp.questions[i].questionType,
        "options" : this.iSurveyTemp.questions[i].options
      }
      this.question.push(temp);
    }
  }

  deleteSurveyFromInactiveSurvey(){
    this.http.delete("/surveyauthor/api/v1/surveys/"+ this.surveyId).subscribe(
      (data) => {
        if(data["status"]==200){
          console.log("deleted successfully");
          setTimeout(()=>{this.getActiveSurveys();this.getInctiveSurveys();},700);
        }
      },
      (response) => {
        console.log("Error Ocurred While Delete", response);
      }
    )
  }


  activeSurveyToInactiveSurvey(){
    this.http.get("/surveyengine/api/v1/surveys/"+ this.activeSurveyId).subscribe((data) => {
      this.aSurveyTemp = data["result"];
    })
    setTimeout(()=>{this.addSurveyToInctiveSurvey()},600);
  }

  addSurveyToInctiveSurvey(){
    this.aQuestionToIQuestion();
    this.iSurveyBody = {
      "title": this.aSurveyTemp.surveyTitle,
      "tags": this.aSurveyTemp.tags,
      "description": this.aSurveyTemp.description,
      "targetAudience": this.aSurveyTemp.targetAudience,
      "surveyType" : this.aSurveyTemp.surveyType,
      "activeTime": this.aSurveyTemp.activeTime,
      "questions": this.iQuestion,
      "uiSetting": null,
      "createdBy": this.aSurveyTemp.createdBy
      };
      this.header = { 'content-type': 'application/json'};
    this.http.post("/surveyauthor/api/v1/surveys/users/"+this.user.userId, this.iSurveyBody, {'headers' : this.header} ).subscribe(
      (data) => {
        if(data["status"]==200){
          this.deleteSurveyFromActiveSurvey();
        }
      },
      (response) => {
        console.log("Error Ocurred While Post", response);
      }
    )
  }

  aQuestionToIQuestion(){
    this.iQuestion=[];
    for (let i = 0; i < this.aSurveyTemp.questions.length; i++) {
      var temp = {
        "id" : this.aSurveyTemp.questions[i].id,
        "questionBody" : this.aSurveyTemp.questions[i].questionBody,
        "questionType" : this.aSurveyTemp.questions[i].questionType,
        "options" : this.aSurveyTemp.questions[i].options
      }
      this.iQuestion.push(temp);
    }
  }

  deleteSurveyFromActiveSurvey(){
    this.http.delete("/surveyengine/api/v1/surveys/"+ this.aSurveyTemp.surveyId).subscribe(
      (data) => {
        if(data["status"]==200){
          console.log("deleted successfully");
          setTimeout(()=>{this.getActiveSurveys();this.getInctiveSurveys();},700);
        }
      },
      (response) => {
        console.log("Error Ocurred While Delete", response);
      }
    )
  }

  openDialogInactiveSurvey(id:any) {
    this.surveyId = null;
    this.flag = null;
    this.surveyId = id;

    const dialogRef = this.dialog.open(DialogBoxActivation, {
      "width": '300px'});

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.flag=result;
        if(this.flag == true){
          this.inactiveSurveyToActiveSurvey();
        }
      });
  }

  openDialogActiveSurvey(id:any) {
    this.activeSurveyId = null;
    this.flag = null;
    this.activeSurveyId = id;

    const dialogRef = this.dialog.open(DialogBoxDeActivation, {
      "width": '300px'});

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.flag=result;
        if(this.flag == true){
          this.activeSurveyToInactiveSurvey();
        }
      });
  }

}

@Component({
  selector: 'dialog-box-activate',
  template: `<p mat-dialog-title style="font-size: large; font-weight: bold;">Do you wish to activate survey.</p>
  <div mat-dialog-actions style="display: flex; flex-direction: row; justify-content: space-between;">
    <button mat-button  style="background-color: #3f51b5; color: white; height: 3em; width : 8em;" (click)= "onYesClick" [mat-dialog-close]="true">Yes</button>&nbsp;
    <button mat-button (click)="onNoClick()" style="height: 3em; width : 8em;" [mat-dialog-close]="false">No</button>
  </div>
  `,
})
export class DialogBoxActivation {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DialogBoxActivation>) {}

  onNoClick() {
    this.dialogRef.close();
  }
  onYesClick(){
    this.dialogRef.close();
  }
}


@Component({
  selector: 'dialog-box-deactivate',
  template: `<p mat-dialog-title style="font-size: large; font-weight: bold;">Do you wish to deactivate survey.</p>
  <div mat-dialog-actions style="display: flex; flex-direction: row; justify-content: space-between;">
    <button mat-button  style="background-color: #3f51b5; color: white; height: 3em; width : 8em;" (click)= "onYesClick" [mat-dialog-close]="true">Yes</button>&nbsp;
    <button mat-button (click)="onNoClick()" style="height: 3em; width : 8em;" [mat-dialog-close]="false">No</button>
  </div>
  `,
})
export class DialogBoxDeActivation {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DialogBoxDeActivation>) {}

  onNoClick() {
    this.dialogRef.close();
  }
  onYesClick(){
    this.dialogRef.close();
  }
}
