import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RoutingService } from './service/routing.service';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainComponent } from './home/main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { CommonModule } from '@angular/common';

// material modules

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
//import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatSidenavModule} from '@angular/material/sidenav';

// import { MatTabsModule } from '@angular/material/tabs';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from './home/data/data.module';
import { ProfileComponent } from './home/profile/profile.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DialogBoxActivation, DialogBoxDeActivation } from './home/surveys/surveys.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    MainComponent, TopBarComponent,
    SideBarComponent, FooterComponent, ErrorpageComponent,
    DialogBoxActivation, DialogBoxDeActivation

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCarouselModule.forRoot(),
    DataModule,
    FlexLayoutModule,
    MatGridListModule,
    MatDialogModule


  ],

  providers: [
    RoutingService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
