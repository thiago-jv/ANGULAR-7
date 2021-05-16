import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.host + "usuario"

  constructor(private http: HttpClient) { }

  public salvar(usuario:Usuario):Observable<Usuario>{
   return this.http.post<Usuario>(this.url, usuario)
  }

  getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Thiago"
    usuario.email = "thiago.henrique.25@hotmail.com"

    return usuario
  }

  public delete(id:string):Observable<any>{
    return this.http.delete(this.url + "/" + id)
  }


  public listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }


}
