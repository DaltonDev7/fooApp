import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavComponent } from './nav/nav.component'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([]),
    NgxPaginationModule
  ],
  exports: [
    NgxPaginationModule,
    NavComponent,
    ReactiveFormsModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
