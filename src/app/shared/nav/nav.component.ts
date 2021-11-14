import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from './../../../app/state/app.state';
import * as authActions from '../../authentication/store/auth.actions'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private router: Router, private store : Store<fromApp.State>) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(new authActions.Logout())
  }

}
