import { Component, OnInit } from '@angular/core';
import { AlimentosUsuario } from 'src/app/core/models/alimentos-usuario.model';
import { ActivatedRoute } from '@angular/router';
import { AlimentosPaginacionDTO } from 'src/app/core/models/DTO/alimentos-paginacion-dto.model';
import { DataPaginacion } from 'src/app/core/models/DTO/data-paginacion.model';
import { AlimentosService } from '../../../core/services/alimentos.service';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  alimentos: AlimentosUsuario[];
  pageActual: number = 1;
  itemByPage: number = 7
  totalRegistros: number;

  constructor(private activedRouted: ActivatedRoute, private alimentoService: AlimentosService) { }

  ngOnInit(): void {

    this.activedRouted.data.subscribe((data: DataPaginacion) => {
      console.log(data);

      this.alimentos = data.alimentos.data
      this.itemByPage = data.alimentos.itemsByPage
      this.totalRegistros = data.alimentos.total
      this.pageActual = data.alimentos.page

    })

  }

  pageChanged(noPage: any) {
    console.log(noPage);
    this.alimentoService.getAlimentosByUser(noPage).subscribe((data:AlimentosPaginacionDTO) => {

      this.alimentos = data.data
      this.itemByPage = data.itemsByPage
      this.totalRegistros = data.total
      this.pageActual = data.page
    })
  }


}
