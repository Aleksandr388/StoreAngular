import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ForgotPassword } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  submit(){
    this.forgotpassword();
  }
  ngOnInit(): void {
  }
  myForm: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
  });

  constructor(private store: Store, private router: Router) { }

  forgotpassword() {
    this.store.dispatch(new ForgotPassword(this.myForm.value)).subscribe(
      () => { }
    );
  }

}
