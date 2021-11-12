import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { EditAlimentosComponent } from './edit-alimentos/edit-alimentos.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { AddAlimentosComponent } from './add-alimentos/add-alimentos.component';
import { SharedModule } from '../../shared/shared.module';



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
    SharedModule
  ]
})
export class UsuarioModule { }
