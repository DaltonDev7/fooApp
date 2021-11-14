import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tokenName } from '../constants/auth-token';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem(tokenName)
    let request = req;

    if(token){
       request = req.clone({
        setHeaders: {
          'authorization-token' : `${token}`
        }
      })
    }

    return next.handle(request);
   
  }


}
