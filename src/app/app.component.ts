import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import * as fromApp from './../app/state/app.state';

import * as authActions from './authentication/store/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'sistemaalimentos';


  constructor(private router: Router,private store : Store<fromApp.State>, private spinner: NgxSpinnerService) { 

    this.store.dispatch(new authActions.AutoLogin())

    
    this.router.events.subscribe((event)=>{
      switch(true){
        case event instanceof NavigationStart:{
          this.spinner.show();
    
        
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: 

              this.spinner.hide();
         break;
        
        default:
          break;
      }
     
    })



  }
}
