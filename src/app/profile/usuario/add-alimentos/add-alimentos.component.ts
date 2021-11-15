import { Component, OnInit } from '@angular/core';
import { AlimentosService } from '../../../core/services/alimentos.service';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state'
import { getIdUsuarioAuth } from 'src/app/authentication/store';
import { GenericoService } from '../../../core/services/generico.service';

@Component({
  selector: 'app-add-alimentos',
  templateUrl: './add-alimentos.component.html',
  styleUrls: ['./add-alimentos.component.css']
})
export class AddAlimentosComponent implements OnInit {

  alimentosForm: FormGroup
  idUsuario: number;

  constructor(
    private genericoService : GenericoService,
    private store: Store<fromApp.State>,
    private alimentosService: AlimentosService,
    private formBuilderService: FormBuilderService) { }

  ngOnInit(): void {
    this.alimentosForm = this.formBuilderService.getAlimentosForm();

    this.store.select(getIdUsuarioAuth).subscribe((idUsuario) => {
      if (idUsuario) this.idUsuario = idUsuario
    })

  }

  saveAlimento(){
    this.genericoService.validateCamposNull(this.alimentosForm)
  }

}
