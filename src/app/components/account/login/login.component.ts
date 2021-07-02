import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    "userEmail": new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    "userPassword": new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  submit() {
    console.log(this.myForm.status);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
