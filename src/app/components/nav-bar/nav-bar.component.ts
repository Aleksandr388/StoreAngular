import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  constructor(private store: Store){}

  isSignIn$ = this.store.select(ourState => ourState.auth.signIn);
}
