import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFormGroup: FormGroup;
  maxDate;

  emailRegexPattern: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.checkAgeFunc();
    this.signupFormGroup = this.formBuilder.group({
      'email' : ['', [Validators.required, Validators.pattern(this.emailRegexPattern), Validators.email]],
      'password' : ['', [Validators.required, Validators.minLength(6)]],
      'birthdate': ['', [Validators.required]],
      'licenAgree': ['', [Validators.required]]
    });
  }
  checkAgeFunc() {
    this.maxDate = new Date();
     this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  submitForm(formSubmitValue) {
    console.log(formSubmitValue);
  }

}
