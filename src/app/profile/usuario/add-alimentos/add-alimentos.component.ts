import { Component, OnInit } from '@angular/core';

import { FormBuilderService } from '../../../core/services/form-builder.service';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state'
import { getIdUsuarioAuth } from 'src/app/authentication/store';
import { GenericoService } from '../../../core/services/generico.service';
import { AlimentosService } from 'src/app/core/services/alimentos.service';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'src/app/core/enum/alert.enum';

@Component({
  selector: 'app-add-alimentos',
  templateUrl: './add-alimentos.component.html',
  styleUrls: ['./add-alimentos.component.css']
})
export class AddAlimentosComponent implements OnInit {

  alimentosForm: FormGroup
  idUsuario: number;

  constructor(
    private toast : ToastrService,
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
    let validCampo = this.genericoService.validateCamposNull(this.alimentosForm)

     if(validCampo){
      this.alimentosForm.patchValue({'IdUsuario' : this.idUsuario})
      this.alimentosService.save(this.alimentosForm.value).subscribe((data)=>{
        this.toast.success(Alert.alimentoSuccess)
        this.alimentosForm.reset()
      },(error)=>{
        this.toast.success(Alert.alimentoFail)
      })
     }
     
  }

}
