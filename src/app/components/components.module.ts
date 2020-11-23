import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [NavbarComponent, GridComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    NavbarComponent,
    GridComponent
  ]
})
export class ComponentsModule { }
