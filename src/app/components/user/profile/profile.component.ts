import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { MustMatch } from 'src/app/shared/extentions/must-mutch';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  get f() { return this.registerForm.controls; }

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
      ],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
}

