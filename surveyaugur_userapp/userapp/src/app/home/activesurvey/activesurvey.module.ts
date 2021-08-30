import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { activesurveyRoutingModule } from './activesurvey-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { PreviewComponent } from './preview/preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { CountDownComponent } from './preview/count-down/count-down.component';

@NgModule({
  declarations: [
    PreviewComponent,
    CountDownComponent
  ],
  imports: [
    CommonModule,
    activesurveyRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    ScrollingModule,
    MatButtonModule,
    MatRadioModule
    
    
  ]
})
export class ActivesurveyModule { }
