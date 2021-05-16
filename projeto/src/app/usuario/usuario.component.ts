import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[]

  constructor(
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService) { }

    ngOnInit() {
     this.listaUsuario()
    }

    public deletar(id: string){
      this.confirmationService.confirm({
        message: "Vai deletar?",
        accept: () => {
          this.usuarioService.delete(id).subscribe( response => {
            this.listaUsuario()
          })
        }
      });
      }

    public listaUsuario(){
      this.usuarioService.listaUsuario().subscribe(
        response => {
          this.usuarios = response
        },
        error => {
          alert("Houve algum erro ao carregar a lista")
        }
      )
      }

}
