import { Authdata } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

 private user: User;
 UserisValid = new Subject<boolean>();

 constructor(private router: Router) {}

 registerusers(authdata: Authdata) {
    this.user = {
        email: authdata.email,
        userId: Math.round(Math.random() * 10000).toString()
    };

    this.isUserAuthenticationSuccess();
 }

 loginUser(authdata: Authdata) {
    this.user = {
        email: authdata.email,
        userId: Math.round(Math.random() * 10000).toString()
    };
   this.isUserAuthenticationSuccess();
 }

 logoutUser() {
     this.user = null;
     this.UserisValid.next(false);
     this.router.navigate(['/login']);
 }

 getUsers() {
    return this.user;
 }

 isAuth() {
    return this.user != null;
 }

 isUserAuthenticationSuccess() {
    this.UserisValid.next(true);
    this.router.navigate(['/training']);
 }

}
