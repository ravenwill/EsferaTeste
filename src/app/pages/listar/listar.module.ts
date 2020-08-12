import { UsuariosService } from './../../services/marcas/usuarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRoutingModule } from './listar-routing.module';
import { ListarComponent } from './listar.component';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    ListarRoutingModule
  ],
  providers: [
    UsuariosService
  ]
})
export class ListarModule { }
