import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'src/app/core/enum/alert.enum';
import { AlimentosService } from 'src/app/core/services/alimentos.service';
import { GenericoService } from 'src/app/core/services/generico.service';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { AlimentosUsuario } from '../../../core/models/alimentos-usuario.model';

@Component({
  selector: 'app-edit-alimentos',
  templateUrl: './edit-alimentos.component.html',
  styleUrls: ['./edit-alimentos.component.css']
})
export class EditAlimentosComponent implements OnInit {

  alimentosForm: FormGroup
  alimento:  AlimentosUsuario

  constructor(
    private toast: ToastrService,
    private genericoService: GenericoService,
    private formBuilderService: FormBuilderService,
    private activedRouted: ActivatedRoute,
    private alimentoService: AlimentosService) { }

  ngOnInit(): void {


    this.activedRouted.data.subscribe((data) => {
      console.log(data.alimentoUser);
      this.alimentosForm = this.formBuilderService.getEditAlimentosForm()
      this.alimentosForm.patchValue(data.alimentoUser)
      this.alimento = data.alimentoUser
    })

  }

  update() {
    let validCampo = this.genericoService.validateCamposNull(this.alimentosForm)

    if (validCampo) {
      let data = {...this.alimento, ...this.alimentosForm.value}
      this.alimentoService.update(data).subscribe((data) => {
        this.toast.success(Alert.alimentoUpdate)
      }, (error) => {
        this.toast.error(Alert.alimentoFail)
      })
    }

  }

}
