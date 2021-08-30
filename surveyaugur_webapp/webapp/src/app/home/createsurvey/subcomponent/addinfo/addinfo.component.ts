import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ElementRef } from '@angular/core';
import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {take} from 'rxjs/operators';
import { UiSetting } from '../../model/uisetting';
import { SurveyService } from '../../services/survey.service';
interface Size {
  value: number;
  viewValue: number;
}

interface Style {
  value: String;
  viewValue: String;
}

interface Color{
  value: string;
  viewValue: string;
}

const color1=[{value:"red", viewValue:"Red"},
{value:"black", viewValue:"Black"},
{value:"green", viewValue:"Green"},
{value:"yellow", viewValue:"Yellow"},
{value:"blue", viewValue:"Blue"},
{value:"pink", viewValue:"Pink"},
{value:"orange", viewValue:"Orange"}
]
const style1=[
  {value:"Times New Roman",viewValue:"Times New Roman"},
  {value:"Georgia",viewValue:"Georgia"},
  {value:"Copperplate",viewValue:"Copperplate"},
  {value:"Monaco",viewValue:"Monaco"},
  {value:"Garamond",viewValue:"Garamond"}
];
const size1= [
  {value: 5, viewValue: 5},
  {value: 10, viewValue: 10},
  {value: 15, viewValue: 15},
  {value: 20, viewValue: 20},
  {value: 25, viewValue: 25},
  {value: 30, viewValue: 30},
  {value: 35, viewValue: 35},
  {value: 40, viewValue: 40},
];
@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.scss']
})
export class AddinfoComponent 
 {
  @ViewChild('fontstyle') fontstyle: ElementRef;
  @ViewChild('fontsize') fontsize: ElementRef;
  @ViewChild('fontfamily') fontfamily: ElementRef;
  uiset:UiSetting=new UiSetting();
  targetAudience:string;
  sizes: Size[] =size1;
  styles:Style[]=style1;
  
 size:string;
 style:string;
 family:string;
 color:string;
 constructor(private surveyService:SurveyService){}
  
font1(values){
  this.size=values["value"]+"px" ;
  this.uiset.size=this.size;
}
 font2(values){
  this.style=values["value"];
  this.uiset.style=this.style;
 }
 font3(values){
 this.family=values["value"];
 this.uiset.family=this.family
 } 
 
  
add(addinfo:NgForm){
   this.targetAudience=addinfo["value"]; 
     this.surveyService.addTargetAudience(this.targetAudience,this.uiset)
}

  
 

}
