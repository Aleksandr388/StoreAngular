import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { RestoreToken } from './store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.store.dispatch(new RestoreToken());
  }

  constructor(private store: Store ){}
}
