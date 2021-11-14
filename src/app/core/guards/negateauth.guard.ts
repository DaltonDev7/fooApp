import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as fromApp from '../../state/app.state'
import { getCurrentUser } from '../../authentication/store/index';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
// import { RedireccionarPerfilService } from '../services/redireccionar-perfil.service';

@Injectable({
  providedIn: 'root'
})
export class NegateauthGuard implements CanActivate {

  constructor( 
    private store: Store<fromApp.State>, 
    private router: Router, 
   // private redirectorService: RedireccionarPerfilService
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.pipe(select(getCurrentUser)).pipe(map((user) => {

     //   console.log(user);
       
        
        if (!user) {
          console.log(user);
          return this.router.createUrlTree(['/login']);
        } else {
          console.log(user);
          return true
        }
    }))
  }
  
}
