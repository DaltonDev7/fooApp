import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavComponent } from './nav/nav.component'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([]),
    NgxPaginationModule
  ],
  exports: [
    NgxPaginationModule,
    NavComponent
  ]
})
export class SharedModule { }
