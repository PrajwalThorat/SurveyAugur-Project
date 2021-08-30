import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MainComponent } from './home/main/main.component';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { ProfileComponent } from './home/profile/profile.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [ {
  path: "home",
  component: MainComponent,
  children:[
     { path: 'activesurvey',loadChildren: () => import('./home/activesurvey/activesurvey.module').then(m => m.ActivesurveyModule) },
    { path: 'profile', component: ProfileComponent },
    { path: 'notifications',loadChildren: () => import('./home/notifications/notifications.module').then(m => m.NotificationsModule) },
    {path: "", redirectTo:"activesurvey", pathMatch:"full"}
   ]
},{
  path: "login",
  component: LoginpageComponent
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
