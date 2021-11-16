import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state'
import { getCurrentUser } from '../../../authentication/store/index';
import { Usuario } from '../../../core/models/usuario.model';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { FormGroup } from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';

import *  as  authAction from 'src/app/authentication/store/auth.actions'
import { GenericoService } from 'src/app/core/services/generico.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {



  userForm: FormGroup
  passWordForm: FormGroup

  constructor(
    private toast :  ToastrService,
    public genericoService: GenericoService,
    private usuarioService: UsuarioService,
    private formBuilderService: FormBuilderService,
    private store: Store<fromApp.State>
  ) { }

  ngOnInit(): void {

    this.passWordForm = this.formBuilderService.getPasswordForm()

    this.store.select(getCurrentUser).subscribe((user: Usuario) => {
      if (user) {
        this.userForm = this.formBuilderService.getEditUserForm()
        this.userForm.patchValue(user)
      }
    })



  }

  actualizarUsername() {
    this.store.dispatch(new authAction.UpdateUser(this.userForm.value))
  }

  actualizarPassword() {
    let valiData: boolean = this.genericoService.validatePassword(this.passWordForm)

    if (valiData) {
      this.usuarioService.updatePassword(this.passWordForm.value).subscribe((data)=>{
        this.toast.success(data.msg)
      },(error)=>{
        this.toast.error(error.error.msg)
      })
    }

  }

}
