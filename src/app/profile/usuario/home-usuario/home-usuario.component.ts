import { Component, OnInit } from '@angular/core';
import { AlimentosUsuario } from 'src/app/core/models/alimentos-usuario.model';
import { ActivatedRoute } from '@angular/router';
import { AlimentosPaginacionDTO } from 'src/app/core/models/DTO/alimentos-paginacion-dto.model';
import { DataPaginacion } from 'src/app/core/models/DTO/data-paginacion.model';
import { AlimentosService } from '../../../core/services/alimentos.service';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'src/app/core/enum/alert.enum';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  //atributos
  buscadorForm: FormGroup
  showButtonLoading: boolean = false

  //atributos paginacion
  alimentos: AlimentosUsuario[];
  pageActual: number = 1;
  itemByPage: number = 7
  totalRegistros: number;
  noPage: number = 1

  constructor(
    private formBuilderService: FormBuilderService,
    private toast: ToastrService,
    private activedRouted: ActivatedRoute,
    private alimentoService: AlimentosService
  ) { }


  ngOnInit(): void {

    this.buscadorForm = this.formBuilderService.getBuscadorForm()
    this.activedRouted.data.subscribe((data: DataPaginacion) => {

      this.alimentos = data.alimentos.data
      this.itemByPage = data.alimentos.itemsByPage
      this.totalRegistros = data.alimentos.total
      this.pageActual = data.alimentos.page
    })


    this.setDataPaginacionDefault()
  }

  pageChanged(noPage: any) {
    this.noPage = noPage
    this.setDataPagination(this.noPage);
  }

  delete(idAlimento) {
    this.alimentoService.deleteById(idAlimento).subscribe(() => {

      this.toast.info(Alert.aliementoDelete)
      this.setDataPagination(this.noPage);
    }, (error) => {
      this.toast.error(Alert.aliementoDeleteFail)
    })
  }


  buscador() {
    let valor = this.buscadorForm.get('campoBuscador').value
    this.showButtonLoading = true
    this.alimentoService.buscadorAlimentos(valor).subscribe((data: AlimentosPaginacionDTO) => {

      this.alimentos = data.data
      this.itemByPage = data.itemsByPage
      this.totalRegistros = data.total
      this.pageActual = data.page

      this.showButtonLoading = false
    })
  }

  private setDataPaginacionDefault() {

    this.buscadorForm.get('campoBuscador').valueChanges.subscribe((valor) => {
      if (!valor) {
        this.setDataPagination(1);
      }
    })
  }


  private setDataPagination(noPage: number) {
    this.alimentoService.getAlimentosByUser(noPage).subscribe((data: AlimentosPaginacionDTO) => {

      this.alimentos = data.data
      this.itemByPage = data.itemsByPage
      this.totalRegistros = data.total
      this.pageActual = data.page
    })
  }


}
