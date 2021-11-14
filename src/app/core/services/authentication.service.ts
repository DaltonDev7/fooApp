import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tokenName } from '../constants/auth-token';
import { LoginSuccessDTO } from '../models/DTO/login-success.model';
import { RegistroDTO } from '../models/DTO/reigstro-dto.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }


  public registrarUsuario(user: RegistroDTO): Observable<RegistroDTO> {
    return this.http.post<RegistroDTO>(`${environment.FoodApi}/Usuarios/Save`, user)
  }

  public SignIn(usuario: Usuario): Observable<LoginSuccessDTO> {
    return this.http.post(`${environment.FoodApi}/Login/SignIn`, usuario)
  }

  public logout(): void {
    localStorage.removeItem(tokenName)
    this.router.navigate(['/login']);
  }

}
