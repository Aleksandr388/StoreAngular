import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Registration } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = new FormGroup({

    "firstname": new FormControl("", [
      Validators.required,
    ]),
    "lastname": new FormControl("", [
      Validators.required,
    ]),
    "email": new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    "password": new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  submit() {
    this.registration();
  }

  constructor(private store: Store, private router: Router) { }

  registration() {
    this.store.dispatch(new Registration(this.myForm.value)).subscribe(
      () => { }
    );
  }

  ngOnInit() { }

}
