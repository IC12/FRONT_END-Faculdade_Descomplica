import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { catchError, EMPTY, tap } from 'rxjs';
import { GenericValidator } from 'src/app/comum/validador';
import { User } from 'src/app/models/user';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  user: User = new User();  
  addressForm = this.fb.group({
    id: this.user.id,
    Name: [this.user.Name, Validators.required],
    email: [this.user.email, [Validators.required, Validators.email]],
    telefone: [this.user.phone, Validators.required],
    cpf: [this.user.cpf, [Validators.required, GenericValidator.isValidCpf()]],
    senha: [this.user.password, Validators.required],
    dataNascimento: [this.user.dateBirth, Validators.required],
  });

  hasUnitNumber = false;
  email = this.addressForm.controls['email'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você precisa inserir um email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private fb: FormBuilder,  private service: UserService) {}

  onSubmit(): void {
    if(this.addressForm.controls['Name'].value)
      this.user.Name= this.addressForm.controls['Name'].value;
    if(this.addressForm.controls['email'].value)
      this.user.email= this.addressForm.controls['email'].value;
    if(this.addressForm.controls['telefone'].value)
      this.user.phone = this.addressForm.controls['telefone'].value;  
    if(this.addressForm.controls['senha'].value)
      this.user.password = this.addressForm.controls['senha'].value;
    if(this.addressForm.controls['cpf'].value)
      this.user.cpf = this.addressForm.controls['cpf'].value;
    if(this.addressForm.controls['dataNascimento'].value)
      this.user.dateBirth = this.addressForm.controls['dataNascimento'].value;  
      
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.service.addUser(this.user).subscribe(
      {
        next: (response) => {
          console.log(response);
          alert("Usuário cadastrado com sucesso.");

        },
        error: (erro: any) => {
          console.log('entrou no erro')
          alert("Ocorreu um erro.");
          console.log(erro);
        }
      }
    )

  }
}