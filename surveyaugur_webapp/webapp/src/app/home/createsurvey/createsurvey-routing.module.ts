import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatesurveyComponent } from './createsurvey.component'; 
import { QuestionstepperComponent } from './questionstepper/questionstepper.component';
import { AddquestionComponent } from './subcomponent/addquestion/addquestion.component';
import { GeneralinfoComponent } from './subcomponent/generalinfo/generalinfo.component';

const routes: Routes = [{ path: '', component: CreatesurveyComponent
,children:[{path:'addquestion',component: QuestionstepperComponent}] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatesurveyRoutingModule { }
