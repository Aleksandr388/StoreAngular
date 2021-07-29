import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Registration } from 'src/app/store/actions/auth.action';
import { MustMatch } from '../../../shared/extentions/must-mutch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  registerForm!: FormGroup;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'),
        Validators.minLength(8)]],
      confirmPassword: ['',
        Validators.required,
        Validators.minLength(8)
      ],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  submit() {
    debugger

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.registration();
  }

  registration() {
    this.store.dispatch(new Registration(this.registerForm.value)).subscribe(
      () => { }
    );
  }
}
