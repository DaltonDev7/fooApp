import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  public getUsuario(): Observable<any> {
    return this.http.get<Usuario>(`${environment.FoodApi}/Usuarios/GetDataUser`)
  }

  public updateUsuario(usuario: Usuario): Observable<any> {
    return this.http.put<Usuario>(`${environment.FoodApi}/Usuarios/Update`, usuario)
  }

  public updatePassword(usuario: Usuario): Observable<any> {
    return this.http.put<Usuario>(`${environment.FoodApi}/Usuarios/Update`, usuario)
  }




}
