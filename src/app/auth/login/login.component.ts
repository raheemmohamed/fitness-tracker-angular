import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginFormbuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.loginFormbuilder.group({
      userEmail : ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required]]
    });
  }

  OnsubmitForm(loginSubmitForm) {
    console.log(this.loginForm.value);

    this.authService.loginUser({
      email: loginSubmitForm.userEmail,
      password: loginSubmitForm.password
    });


  }

}
