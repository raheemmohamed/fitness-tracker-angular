import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent implements OnInit, OnDestroy {
  @Output() closeSideMenuBar = new EventEmitter();
  isAuthentication = false;
  isAuthenSubcribtion = new Subscription;

  constructor(private authServie: AuthService) { }

  ngOnInit() {
    this.isAuthenSubcribtion = this.authServie.UserisValid.subscribe(userValidStatus => {
      this.isAuthentication = userValidStatus;
    });
  }

  closeSideMenu() {
    this.closeSideMenuBar.emit();
  }

  onLogout() {
    this.closeSideMenu();
    this.authServie.logoutUser();
  }

  ngOnDestroy() {
    this.isAuthenSubcribtion.unsubscribe();
  }
}
