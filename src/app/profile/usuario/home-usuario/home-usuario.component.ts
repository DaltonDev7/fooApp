import { Component, OnInit } from '@angular/core';
import { AlimentosUsuario } from 'src/app/core/models/alimentos-usuario.model';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  datafake: AlimentosUsuario[];
  pageActual:number = 1;
  itemByPage:number = 7

  constructor() { }

  ngOnInit(): void {

    this.datafake = [
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },
      {
        Desayuno: "Pan con leche",
        Comida: "pollo frito, arroz, y habichuela",
        Cena: "yuca, y huevo",
        ComidaExtra: "Dorito",
        FechaCreacion: new Date()
      },

    ]

  }

  pageChanged(event:any){
    console.log(event);
    
  }

}
