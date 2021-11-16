import { Component, OnInit } from '@angular/core';
import { AlimentosUsuario } from 'src/app/core/models/alimentos-usuario.model';
import { ActivatedRoute } from '@angular/router';
import { AlimentosPaginacionDTO } from 'src/app/core/models/DTO/alimentos-paginacion-dto.model';
import { DataPaginacion } from 'src/app/core/models/DTO/data-paginacion.model';
import { AlimentosService } from '../../../core/services/alimentos.service';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'src/app/core/enum/alert.enum';

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

  noPage: number = 1

  constructor(
    private toast: ToastrService,
    private activedRouted: ActivatedRoute,
    private alimentoService: AlimentosService
  ) { }

  ngOnInit(): void {

    this.activedRouted.data.subscribe((data: DataPaginacion) => {

      this.alimentos = data.alimentos.data
      this.itemByPage = data.alimentos.itemsByPage
      this.totalRegistros = data.alimentos.total
      this.pageActual = data.alimentos.page

    })

  }

  pageChanged(noPage: any) {
    this.noPage = noPage
    this.setDataPagination();
  }

  delete(idAlimento) {
    this.alimentoService.deleteById(idAlimento).subscribe(() => {
      
      this.toast.info(Alert.aliementoDelete)
      this.setDataPagination();
    }, (error) => {
      this.toast.error(Alert.aliementoDeleteFail)
    })
  }

  private setDataPagination() {
    this.alimentoService.getAlimentosByUser(this.noPage).subscribe((data: AlimentosPaginacionDTO) => {

      this.alimentos = data.data
      this.itemByPage = data.itemsByPage
      this.totalRegistros = data.total
      this.pageActual = data.page
    })
  }


}
