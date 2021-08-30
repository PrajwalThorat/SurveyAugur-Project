import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivesurveyComponent } from './activesurvey.component'; 
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [{ path: '', component: ActivesurveyComponent },
{path:'takesurvey/:id',
component: PreviewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class activesurveyRoutingModule { }
