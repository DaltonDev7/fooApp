import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state'
import { getCurrentUser } from '../../../authentication/store/index';
import { Usuario } from '../../../core/models/usuario.model';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { FormGroup } from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';

import *  as  authAction from 'src/app/authentication/store/auth.actions'

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {



  userForm: FormGroup
  passWordForm: FormGroup

  constructor(
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

  }

}
