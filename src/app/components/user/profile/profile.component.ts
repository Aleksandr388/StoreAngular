import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { StoreUserModel } from 'src/app/models/auth.model';
import { GetUserData, UpdateUserProfile } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/states/auth.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  submitted = false;

  public userForm!: FormGroup;
  accesToken?: string;
  public dataEditEnable: Boolean = false;

  get f() { return this.userForm.controls; }

  constructor(private store: Store) {
    this.store.select(AuthState.accesToken).subscribe(
      (res) => { this.accesToken = res }
    )
    this.store.select(AuthState.user).subscribe(
      (payload: StoreUserModel | null) => {
        this.userForm = new FormGroup({
          jwt: new FormControl({ value: this.accesToken, disabled: true }, [Validators.required]),
          firstName: new FormControl({ value: payload?.firstName, disabled: true }, Validators.compose([Validators.required])),
          lastName: new FormControl({ value: payload?.lastName, disabled: true }, Validators.compose([Validators.required])),
          email: new FormControl({ value: payload?.email, disabled: true }, Validators.compose([Validators.required, Validators.email])),
          currentPassword: new FormControl({ value: payload?.currentPassword, disabled: true }, Validators.compose([Validators.required])),
          newPassword: new FormControl({ value: payload?.newPassword, disabled: true }, Validators.compose([Validators.required])),
          confirmPassword: new FormControl({value: '', disabled: true }, Validators.compose([Validators.required]))
        });
      })
  }

  editEnable() {
    this.userForm.enable();
    this.dataEditEnable = true;
  }

  closeEdit() {
    this.userForm.disable();
    this.dataEditEnable = false;
  }


  updateForm(){
    if(this.userForm.dirty){
        this.store.dispatch(new UpdateUserProfile(this.userForm.value)).subscribe(
          () => { 
           this.userForm.disable();
           this.dataEditEnable = false;
          },
      )
    } else {
      this.dataEditEnable = false;
      this.userForm.disable();
    }
  }


  getUserData() {
    this.store.dispatch(new GetUserData(this.userForm.value))
  }

  ngOnInit() { 
    this.getUserData();
  }
}
