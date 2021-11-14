import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavComponent } from './nav/nav.component'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [
    NgxPaginationModule,
    HttpClientModule,
    NavComponent
  ]
})
export class SharedModule { }
