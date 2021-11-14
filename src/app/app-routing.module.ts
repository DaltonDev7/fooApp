import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page404/page-not-found.component';
import { NegateauthGuard } from './core/guards/negateauth.guard';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';



const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./profile/usuario/usuario.module').then(m => m.UsuarioModule),
    canActivate: [NegateauthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
