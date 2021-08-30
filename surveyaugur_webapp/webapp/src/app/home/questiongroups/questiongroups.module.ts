import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {QuestiongroupsRoutingModule } from './questiongroups-routing.module';
import { QuestiongroupsComponent } from './questiongroups.component';
import { QuestiongrouphomeComponent } from './questiongrouphome/questiongrouphome.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import { AddquestiongroupComponent } from './addquestiongroup/addquestiongroup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from "@angular/material/chips";
import {MatTableModule} from "@angular/material/table";
import {MatTooltip, MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule,Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {QuestionsComponent} from "./questions/questions.component";


import {MatRadioModule} from "@angular/material/radio";

const route:Routes =[
   {
      component: QuestiongrouphomeComponent,
     path:'questiongrouphome/:id'
   }
 ];



@NgModule({
  declarations: [QuestiongroupsComponent, QuestiongrouphomeComponent, AddquestiongroupComponent,QuestionsComponent],
    imports: [
        CommonModule,
        QuestiongroupsRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatChipsModule,
        FormsModule,
        MatTableModule,
      MatTooltipModule,
      RouterModule,
      HttpClientModule,
      MatRadioModule

    ],
  exports:[RouterModule]
})
export class questiongroupsModule { }
