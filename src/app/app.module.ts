import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ForumComponent } from './forum/forum.component';
import { NewQueryComponent } from './forum/new-query/new-query.component';
import { QueryFeedComponent } from './forum/query-feed/query-feed.component';
import { MyQueriesComponent } from './forum/my-queries/my-queries.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { StopQueryComponent } from './forum/stopQuery.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ForumComponent,
    NewQueryComponent,
    QueryFeedComponent,
    MyQueriesComponent,
    OnBoardingComponent,
    StopQueryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [StopQueryComponent]
})
export class AppModule { }
