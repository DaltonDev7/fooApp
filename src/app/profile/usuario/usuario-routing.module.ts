import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { EditAlimentosComponent } from './edit-alimentos/edit-alimentos.component';
import { AddAlimentosComponent } from './add-alimentos/add-alimentos.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { GetAlimentoUser } from 'src/app/core/resolvers/get-alimentos-user.resolver';



const routes: Routes = [
  {
    path: '',
    component: HomeUsuarioComponent,
    resolve :{
      alimentos : GetAlimentoUser
    }
  },
  {
    path: 'edit-alimentos',
    component: EditAlimentosComponent
  },
  {
    path: 'add-alimentos',
    component: AddAlimentosComponent
  },
  {
    path: 'edit-perfil',
    component: EditPerfilComponent
  }
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UsuarioRoutingModule { }
