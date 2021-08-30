import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivesurveyComponent } from './activesurvey/activesurvey.component';

import {ShareComponent } from './share.component';

const routes: Routes = [{ path: '', component: ShareComponent },
{path:'activesurveylist',component: ActivesurveyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
