import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {NgForm} from "@angular/forms";
import {QuestiongroupserviceService} from "../services/questiongroupservice.service";
import {QuestionGroup} from "../services/questionGroup";
import {Router} from "@angular/router";

export interface Tag {
  name: string;
}
@Component({
  selector: 'app-addquestiongroup',
  templateUrl: './addquestiongroup.component.html',
  styleUrls: ['./addquestiongroup.component.css']
})
export class AddquestiongroupComponent implements OnInit {
quesGrp=new QuestionGroup();
  constructor(private quesGrpService:QuestiongroupserviceService,private router:Router) { }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [

  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }


  ngOnInit(): void {
  }

  getData(data: NgForm) {

    this.quesGrp.tags=this.tags;
    this.quesGrpService.saveQuestionGrp(this.quesGrp).subscribe((data)=>
    {
      console.log(data);
    },(error)=>{
      console.log(error);

      this.router.navigateByUrl('/error',{state: {errorCode:error}})
    });

  }
}

