import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RequestRoutingModule } from './request-routing.module';
 import { RequestComponent } from './request.component';
 import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [RequestComponent,MessageComponent],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    RequestRoutingModule,
    MatDialogModule
    
  ]
})
export class RequestModule { }
