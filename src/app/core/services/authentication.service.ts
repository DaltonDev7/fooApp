import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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


}
