import { EstadosRoutingModule } from './estados.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [EstadosComponent],
  imports: [
    CommonModule,
    EstadosRoutingModule,
    TableModule
  ]
})
export class EstadosModule { }
