import { UsuarioService } from './../../usuario.service';
import { Usuario } from './../../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  public salvar() {
   this.usuarioService.salvar(this.usuario).subscribe(
     response => {
    alert("Salvo com sucesso")
   },
   error => {
    alert("Aconteceu algo de errado")
   })

  }

}
