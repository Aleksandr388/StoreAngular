import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/store/actions/auth.action';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  get f() { return this.loginForm.controls; }
  
  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.login();
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  login() {
    this.store.dispatch(new Login(this.loginForm.value)).subscribe(
      () => { }
    );
  }



}

