import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActiveSurveys } from './model/activesurvey';



@Component({
  selector: 'app-activesurvey',
  templateUrl: './activesurvey.component.html',
  styleUrls: ['./activesurvey.component.css']
})
export class ActivesurveyComponent implements OnInit {

  enable:boolean=false
  activeSurvey:ActiveSurveys[]=[]
  constructor(private http:HttpClient) { }
   displayedColumns: string[] = ['position', 'name', 'type', 'action' ];
   dataSource: MatTableDataSource<ActiveSurveys>=new MatTableDataSource();

    // @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
  //this.dataSource.paginator = this.paginator;
 this.http.get("/surveyengine/api/v1/surveys").subscribe((data:any)=>{
   console.log(data["result"])
   this.activeSurvey=(data["result"]);
   this.dataSource= new MatTableDataSource<ActiveSurveys>(this.activeSurvey);
   if(this.activeSurvey.length==0){
     console.log(this.activeSurvey.length)
     this.enable=true;
   }
   console.log("mmm")
   console.log(this.activeSurvey.length)
   
 })
  }

}
