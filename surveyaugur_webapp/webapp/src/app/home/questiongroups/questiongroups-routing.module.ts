import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {QuestiongroupsComponent } from './questiongroups.component';
import {QuestiongrouphomeComponent} from "./questiongrouphome/questiongrouphome.component";
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [{ path: '', component: QuestiongroupsComponent },
  {path:'questiongrouphome/:id',
    component: QuestiongrouphomeComponent},
    {path:'questions',component:QuestionsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class QuestiongroupsRoutingModule { }
