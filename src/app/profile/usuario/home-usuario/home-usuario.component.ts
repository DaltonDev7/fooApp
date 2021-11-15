import { Component, OnInit } from '@angular/core';
import { AlimentosUsuario } from 'src/app/core/models/alimentos-usuario.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  datafake: AlimentosUsuario[];
  pageActual: number = 1;
  itemByPage: number = 7

  constructor(private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {

    this.activedRouted.data.subscribe((alimentos: AlimentosUsuario) => {
      console.log(alimentos);
      
    })

  }

  pageChanged(event: any) {
    console.log(event);

  }

}
