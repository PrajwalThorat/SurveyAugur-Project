import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { CreatesurveyRoutingModule } from './createsurvey-routing.module';
import { CreatesurveyComponent } from './createsurvey.component';
import { GeneralinfoComponent } from './subcomponent/generalinfo/generalinfo.component';
import { AddquestionComponent } from './subcomponent/addquestion/addquestion.component';
import { QuestionlistComponent } from './subcomponent/questionlist/questionlist.component';
import { AddinfoComponent } from './subcomponent/addinfo/addinfo.component';
import { PreviewComponent } from './subcomponent/preview/preview.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';
import { QuestionstepperComponent } from './questionstepper/questionstepper.component';
import { FormsModule } from '@angular/forms';
import { CountDownComponent } from './subcomponent/preview/count-down/count-down.component';
import { MatCardModule } from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [CreatesurveyComponent, GeneralinfoComponent,
     AddquestionComponent, QuestionlistComponent, AddinfoComponent,
      PreviewComponent, QuestionstepperComponent, CountDownComponent],
  imports: [
    CommonModule,
    FormsModule,
    CreatesurveyRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    TextFieldModule,
    MatSelectModule,
    MatCardModule,
    ScrollingModule,
    MatRadioModule
  ]
})
export class CreatesurveyModule { }
