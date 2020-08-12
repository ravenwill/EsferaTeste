import { Usuarios, UsuariosList } from './../../models/usuarios/usuarios';
import { UsuariosService } from './../../services/marcas/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  usuariosLista: UsuariosList[] = [];

  constructor(
    private _usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.carregaUsuarios();
  }

  carregaUsuarios() {
    this._usuariosService.listar().subscribe(
      (res: Usuarios[]) => {
        res.forEach((item: Usuarios) => {
          if(this.usuariosLista.length > 0 && this.usuariosLista[this.usuariosLista.length -1].companyName == item.company.name) {
            this.usuariosLista[this.usuariosLista.length -1].user.push({
              id: item.id,
              name: item.name,
              email: item.email
            });
          } else {
            this.usuariosLista.push({
              companyName: item.company.name,
              user: [{
                id: item.id,
                name: item.name,
                email: item.email
              }]
            });
          }
        });
      }
    )
  }

}
