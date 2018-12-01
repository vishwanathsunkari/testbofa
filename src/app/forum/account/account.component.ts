import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
user: User;
  constructor(public authService: AuthService) { }
count=50;
  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
