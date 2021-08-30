import {Component, Input, OnInit} from '@angular/core';

import {AddquestiongroupComponent} from "./addquestiongroup/addquestiongroup.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {QuestiongroupserviceService} from "./services/questiongroupservice.service";
import {QuestionGroup} from "./services/questionGroup";
import {MatTableDataSource} from "@angular/material/table";
import {QuestionsComponent} from "./questions/questions.component";




@Component({
  selector: 'app-questiongroups',
  templateUrl: './questiongroups.component.html',
  styleUrls: ['./questiongroups.component.scss']
})
export class QuestiongroupsComponent implements OnInit {
  questionGroups:QuestionGroup[]=[];
  @Input() updateQuesGrp:QuestionGroup;
  dataSource:MatTableDataSource<QuestionGroup>;


  constructor(public dialog: MatDialog,public router:Router,private questionGrpService:QuestiongroupserviceService) { }

  ngOnInit(): void {
    this.getData();



  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddquestiongroupComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getData();
      window.location.reload();
    });
  }
  getData(){
    this.questionGrpService.getByUserId().subscribe((data)=>{
      this.questionGroups=data["result"];
      console.log(data);

      console.log(this.questionGroups);
      this.dataSource=new MatTableDataSource<QuestionGroup>(this.questionGroups);
    },(error)=>{
      console.log(error);

        this.router.navigateByUrl('/error',{state: {errorCode:error}})
      }
      );
  }
position:number=1;
  displayedColumns: string[] = ['position', 'name', 'createdOn'];

  /*updateDialog(quesGroup:QuestionGroup) {
      this.updateQuesGrp=quesGroup;
    const dialogRef = this.dialog.open(UpdatequestiongroupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getData();
    });
  }*/
  /*show(){
    if(this.questionGroups.length==0){
      return true;
    }else {
      return false;
    }

  }*/

}

