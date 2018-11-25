import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit , OnDestroy {
@Output() sideNavClose = new EventEmitter<void>();
authSubscription  = new Subscription();
  constructor(private authService: AuthService) { }
isAuth = false;
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authstatus => {
        this.isAuth = authstatus;
    });
  }
onClose() {
this.sideNavClose.emit();
}
onLogout() {
  this.onClose();
  this.authService.logout();

}
ngOnDestroy() {
  this.authSubscription.unsubscribe();
}
}
