import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from "@angular/material/chips";
import {MatTableModule} from "@angular/material/table";
import {ShareRoutingModule } from './share-routing.module';
 import { ShareComponent } from './share.component';
import { ActivesurveyComponent } from './activesurvey/activesurvey.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EmaildialogComponent } from './emaildialog/emaildialog.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ShareComponent, ActivesurveyComponent, EmaildialogComponent],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
     FormsModule,
     ReactiveFormsModule,
     MatButtonModule
  ]
})
export class ShareModule { }
