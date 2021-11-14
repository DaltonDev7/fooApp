import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../state/app.state'
import { map } from 'rxjs/operators';
import { getCurrentUser } from 'src/app/authentication/store';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private store: Store<fromApp.State>, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.store.pipe(select(getCurrentUser)).pipe(map((user)=>{
      console.log(user);

      let data =  false
      
      if(!user){
        console.log('algo');
        
        return true
      }else{
        return this.router.createUrlTree(['/'])
      }
    }))

  }


  
}
