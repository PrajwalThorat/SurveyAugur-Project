import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UUID } from "angular2-uuid";
import {Router} from "@angular/router";
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {MailDetails} from "../mailDetails";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-emaildialog',
  templateUrl: './emaildialog.component.html',
  styleUrls: ['./emaildialog.component.css']
})
export class EmaildialogComponent implements OnInit {
  surveyUrl:string="";
  surveyId:UUID;
  url:string;
  mailDetails=new MailDetails();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public http:HttpClient,public router:Router){
    this.surveyUrl=data.surveyurl;
    this.surveyId=data.surveyId
  }
  ngOnInit(): void {

  }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  mailId: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.mailId.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(mail:string): void {
    const index = this.mailId.indexOf(mail);

    if (index >= 0) {
      this.mailId.splice(index, 1);
    }
  }

  sendMailIds(data){
  this.url="surveyengine/api/v1/surveys/";
  this.mailDetails.mailIds=this.mailId;
  this.mailDetails.message=data.message;
  this.http.post(this.url+this.surveyId+"/share",this.mailDetails).pipe(catchError(this.handleError)).subscribe((data)=>{

  console.log(data);
  },(error)=>{
          console.log(error);

            this.router.navigateByUrl('/error',{state: {errorCode:error}})
          });


  }
  handleError(error:HttpErrorResponse) {
      return throwError(error.status)
    }

}
