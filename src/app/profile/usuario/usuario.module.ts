import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { EditAlimentosComponent } from './edit-alimentos/edit-alimentos.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { AddAlimentosComponent } from './add-alimentos/add-alimentos.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    HomeUsuarioComponent,
    EditPerfilComponent,
    EditAlimentosComponent,
    AddAlimentosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    SweetAlert2Module.forChild(),
    FormsModule
    // NgbModule,
    // NgbNavOutlet
  ]
})
export class UsuarioModule { }
