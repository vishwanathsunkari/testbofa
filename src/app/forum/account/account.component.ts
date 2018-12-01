import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
user: User;
public classReference = AccountComponent;
  constructor(public authService: AuthService, public questionService: QuestionService) { }
static count: number= 0;
  ngOnInit() {
    this.user = this.authService.getUser();
    this.questionService.getQueryCountUpdated().subscribe(value => {
      AccountComponent.count = value;
      console.log(AccountComponent.count);
    });
    console.log(AccountComponent.count);
  }

  get staticCount() {
    return AccountComponent.count;
  }

}
