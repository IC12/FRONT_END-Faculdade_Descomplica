import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  addressForm = this.fb.group({
    email: ['', Validators.required],
    senha: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private autorizacaoService: AutorizacaoService) { }

  obterDescricaoLogin = () =>
    this.autorizacaoService.obterLoginStatus() ? "Estou Autorizado" : "Não Estou Autorizado";

  onSubmit(): void {
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else {
      this.service.login(this.addressForm.value).subscribe(
        {
          next: (response) => {
            console.log(response.idToken)
            if (response.idToken) {
              this.autorizacaoService.autorizar(response.idToken);
              this.router.navigate(['/usuario']);
            }
          },
          error: (erro: any) => {
            console.log('entrou no erro')
            alert("Usuário ou Senha inválido(s)!");
            console.log(erro)
          }
        }
      )
    }
  }
}
