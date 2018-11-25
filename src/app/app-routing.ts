import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForumComponent } from './forum/forum.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { MyQueriesComponent } from './forum/my-queries/my-queries.component';
import { AuthGaurd } from './auth/auth.guard';

const routes: Routes = [
  {path: '' , component: WelcomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forum', component: ForumComponent , canActivate: [AuthGaurd]},
  { path: 'onBoarding', component: OnBoardingComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule {}
