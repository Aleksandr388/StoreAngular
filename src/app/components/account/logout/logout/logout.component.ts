import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Logout } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private store: Store, private router: Router) { }


  submit(){
    this.logout();
  }

logout(){
  this.store.dispatch(new Logout()).subscribe;
}

  ngOnInit() {
  }
}