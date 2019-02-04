import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit, OnDestroy {

  @Output() sideMenuToggle = new EventEmitter;
  isAuthentication = false;
  authSubcription = new Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubcription = this.authService.UserisValid.subscribe(validStatus => {
      this.isAuthentication = validStatus;
    });
  }

  toggleMenu() {
    this.sideMenuToggle.emit();
  }

  onlogout() {
    this.authService.logoutUser();
  }

  ngOnDestroy() {
    this.authSubcription.unsubscribe();
  }

}
