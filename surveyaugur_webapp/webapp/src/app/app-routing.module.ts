import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MainComponent } from './home/main/main.component';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { ProfileComponent } from './home/profile/profile.component';

import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [ {
  path: "login",
  component: LoginpageComponent
},
{
  path: "home",
  component: MainComponent,
  children:[
    // {path:'createsurvey', component:CreatesurveyComponent}
     { path: 'createsurvey', loadChildren: () => import('./home/createsurvey/createsurvey.module').then(m => m.CreatesurveyModule) },
     { path: 'dashboard', loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule) },
     { path: 'surveys', loadChildren: () => import('./home/surveys/surveys.module').then(m => m.SurveysModule) },
     { path: 'questiongroups', loadChildren: () => import('./home/questiongroups/questiongroups.module').then(m => m.questiongroupsModule) },
     { path: 'request', loadChildren: () => import('./home/request/request.module').then(m => m.RequestModule) },
     { path: 'share', loadChildren: () => import('./home/share/share.module').then(m => m.ShareModule) },
    { path: 'profile',loadChildren: () => import('./home/profile/profile.module').then(m => m.ProfileModule) },
    { path: 'notifications', component: NotificationsComponent },
    {path: "", redirectTo:"dashboard", pathMatch:"full"}
   ]
},{
  path: "error",
  component: ErrorpageComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
