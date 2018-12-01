import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForumComponent } from './forum/forum.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { MyQueriesComponent } from './forum/my-queries/my-queries.component';
import { AuthGaurd } from './auth/auth.guard';
import { SingleQueryComponent } from './forum/single-query/single-query.component';
import { NewQueryComponent } from './forum/new-query/new-query.component';
import { AccountComponent } from './forum/account/account.component';
import { QueryFeedComponent } from './forum/query-feed/query-feed.component';

const routes: Routes = [
  {path: '' , component: WelcomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forum', component: ForumComponent , children : [
    {path: 'query', component: SingleQueryComponent},
    {path: 'new', component: NewQueryComponent},
    {path: 'edit/:id', component: NewQueryComponent},
    {path: 'myQueries', component: MyQueriesComponent},
    {path: 'queryFeed', component: QueryFeedComponent},
  ], canActivate: [AuthGaurd]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGaurd]},
  { path: 'onBoarding', component: OnBoardingComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule {}
