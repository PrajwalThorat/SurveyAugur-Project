import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule}from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [DashboardComponent],
  imports: [    
    DashboardRoutingModule,
    ChartsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    NgCircleProgressModule.forRoot({
          "backgroundColor": "#F1F1F1",
          "backgroundPadding": -18,
          "radius": 60,
          "toFixed": 2,
          "outerStrokeWidth": 10,
          "outerStrokeColor": "#FF6347",
          "innerStrokeColor": "#32CD32",
          "innerStrokeWidth": 1,
          "startFromZero": false})
      ],

})
export class DashboardModule { }
