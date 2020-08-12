import { Usuarios } from './../../models/usuarios/usuarios';
import { UsuariosService } from './../../services/marcas/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  usuario: Usuarios;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id'];
    if(id != null || id != undefined) {
      this.carregaDadosUsuario(id)
    }
  }

  public carregaDadosUsuario(id) {
    this._usuariosService.obterUsuario(id).subscribe(
      (res: Usuarios[]) => this.usuario = res[0]
    );
  }

}
