import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,MatButtonModule,
  ]
})
export class ProfileModule { }
