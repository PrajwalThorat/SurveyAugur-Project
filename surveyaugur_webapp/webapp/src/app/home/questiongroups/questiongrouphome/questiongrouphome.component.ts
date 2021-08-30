import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestiongroupserviceService} from "../services/questiongroupservice.service";
import {QuestionGroup} from "../services/questionGroup";
import {Question} from "../services/question";
import {MatTableDataSource} from "@angular/material/table";
import {UUID} from "angular2-uuid";
import {QuestionsComponent} from "../questions/questions.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-questiongrouphome',
  templateUrl: './questiongrouphome.component.html',
  styleUrls: ['./questiongrouphome.component.css']
})
export class QuestiongrouphomeComponent implements OnInit {
quesGrp=new QuestionGroup();
questions:Question[]=[];
  dataSource:MatTableDataSource<Question>;
  private quesGroupId: UUID;


  constructor(public dialog: MatDialog,private questionGroupService:QuestiongroupserviceService,private router:ActivatedRoute,private routeTo:Router) {

  }
  displayedColumns: string[] = ['position', 'questionBody', 'Actions'];


  ngOnInit(): void {
    this.questionGroupService.getByQuesGrpId(this.router.snapshot.params.id).subscribe((data)=>{
      this.quesGrp=data.result;
      this.quesGroupId=this.router.snapshot.params.id;
      console.log(this.quesGroupId);
      console.log("hdgsjdjsd");
      console.log(this.quesGrp);
    })
    this.getAllQuestionByQuesGrpId();
  }
  getAllQuestionByQuesGrpId(){

    this.questionGroupService.getQuestionsByQuesGrpId(this.router.snapshot.params.id).subscribe((data)=>{
      this.questions=data["result"];
      console.log(this.questions);
      this.dataSource=new MatTableDataSource<Question>(this.questions);
    },(error)=>{
      console.log(error);

      this.routeTo.navigateByUrl('/error',{state: {errorCode:error}})
    })
  }



  deleteQuestion(ques:UUID) {
    this.questionGroupService.deleteQuestionById(ques).subscribe((data)=>{
      console.log(data);
      this.getAllQuestionByQuesGrpId();
      window.location.reload();
    },(error)=>{
      console.log(error);

      this.routeTo.navigateByUrl('/error',{state: {errorCode:error}})
    })


  }



  openDialog(): void {
    const dialogRef = this.dialog.open(QuestionsComponent, {
      width: '45%',
      data:{
        quesGroupId:this.quesGroupId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllQuestionByQuesGrpId();
      window.location.reload();

    });
  }
}


