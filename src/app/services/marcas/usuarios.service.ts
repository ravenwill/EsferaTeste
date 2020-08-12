import { Usuarios } from './../../models/usuarios/usuarios';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${environment.apiUrl}/users`);
  }

  obterUsuario(id): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${environment.apiUrl}/users?id=${id}`);
  }
}
