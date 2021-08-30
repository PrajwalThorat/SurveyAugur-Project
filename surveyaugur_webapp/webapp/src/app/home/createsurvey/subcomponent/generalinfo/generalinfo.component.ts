import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { OnInit } from '@angular/core';
import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { Generalinfo } from '../../model/generalinfo';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styleUrls: ['./generalinfo.component.scss']
})
export class GeneralinfoComponent implements OnInit {
  ginfo:Generalinfo;
  constructor(private router:Router,private surveyService:SurveyService){
    this.ginfo=new Generalinfo();
  }
  ngOnInit(): void {
   
  }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [
   
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our Tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(Tag: string): void {
    const index = this.tags.indexOf(Tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

}
submit(info:NgForm){
  this.ginfo=info["value"];
  this.ginfo.tags=this.tags;
  this.surveyService.ginfoSub.next(this.ginfo);
  
}
}
  