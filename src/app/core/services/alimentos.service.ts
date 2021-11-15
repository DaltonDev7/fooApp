import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlimentosUsuario } from '../models/alimentos-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  constructor(private http: HttpClient) { }

  public save(payload: AlimentosUsuario) {
    return this.http.post(`${environment.FoodApi}/Alimentos/Save`, payload)
  }

  public getAlimentosByUser(pagePaginacion = 1) {
    let page = pagePaginacion
    return this.http.post(`${environment.FoodApi}/Alimentos/GetByUser`, { page })
  }

  public getAlimentoByUser(id:number) {
    return this.http.get(`${environment.FoodApi}/Alimentos/GetAlimentoById/${id}`)
  }

  public update(payload: AlimentosUsuario) {
    return this.http.put(`${environment.FoodApi}/Alimentos/Update`, payload)
  }

  public deleteById(idAlimento: number) {
    return this.http.delete(`${environment.FoodApi}/Alimentos/Delete/${idAlimento}`)
  }

}
