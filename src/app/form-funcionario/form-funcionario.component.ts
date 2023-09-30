import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.scss'],
})
export class FormFuncionarioComponent {
  createFuncionarioForm = this.formBuilder.group({
    Nome: ``,
    CPF: ``,
    DataNascimento: ``,
    Endereco: ``,
    Telefone: ``,
    Email: ``,
    Sexo: ``,
    Equipe: ``,
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.createFuncionarioForm.value);
  }
}
