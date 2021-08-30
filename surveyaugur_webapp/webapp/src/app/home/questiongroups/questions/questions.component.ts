import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UUID } from 'angular2-uuid';
import { NgForm } from '@angular/forms';
import { QuestionType } from '../../createsurvey/model/QuestionType';
import { Question } from './myquestion';
import { v4 as uuidv4 } from 'uuid';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UserinfoService } from '../../../service/userinfo.service';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  quest: Question;
  choice: String;
  questionGrpId: UUID;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly keyCode = [ENTER, COMMA] as const;
  tags: string[] = [];
  options: string[] = [
  ];
  isoptions: boolean;
  button: any;
  constructor(public http: HttpClient, public userinfo: UserinfoService, public dialogRef: MatDialogRef<QuestionsComponent>, @Inject(MAT_DIALOG_DATA) public data: any,public router:Router) {
    this.questionGrpId = this.data.quesGroupId;
    console.log("in quest");
    console.log(this.questionGrpId)
  }





  onoptions() {
    this.button.get('subjective')!.enable();
    this.isoptions = false;
  }
  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  remove(tags: string): void {
    const index = this.tags.indexOf(tags);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  addOption(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.options.push(value);
    } event.chipInput!.clear();
  }
  removeOption(options: string): void {
    const index = this.options.indexOf(options);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }
  save(ques: NgForm) {
    console.log(ques["value"])
    let qinfo = ques["value"]
    this.quest = new Question()
    this.quest.questionBody = qinfo.q;
    this.quest.questionType = qinfo.questiontype.toUpperCase();
    this.quest.tags = this.tags;
    this.quest.options = this.options;
    this.quest.createdBy = this.userinfo.userId;
    this.quest.id = uuidv4();
    this.quest.createdOnTS = new Date();
    this.quest.updatedBy = null;
    this.quest.updatedOnTS = new Date();

    let url = "/surveyauthor/api/v1/questions";
    this.quest.questionGroupId = this.questionGrpId;
    console.log(this.quest);
    this.http.post(url, this.quest).pipe(catchError(this.handleError)).subscribe((data) => { console.log(data) },
      (error)=>{
        console.log(error);

        this.router.navigateByUrl('/error',{state: {errorCode:error}})
      })
    this.dialogRef.close();
  }

  handleError(error:HttpErrorResponse) {
    return throwError(error.status)
  }

}

