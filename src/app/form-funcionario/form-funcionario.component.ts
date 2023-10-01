import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FuncionariosService } from '../funcionarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.scss'],
})
export class FormFuncionarioComponent {
  createFuncionarioForm = this.formBuilder.group(
    {
      nome: this.formBuilder.control(``, [Validators.required]),
      cpf: this.formBuilder.control(``, [
        Validators.required,
        Validators.pattern(/\d{3}\.\d{3}\.\d{3}\-\d{2}/),
      ]),
      dataNascimento: this.formBuilder.control(``, [Validators.required]),
      endereco: this.formBuilder.control(``),
      telefone: this.formBuilder.control(``, [
        Validators.pattern(/\(\d{2}\)\d{5}-\d{4}/),
      ]),
      email: this.formBuilder.control(``, [
        Validators.required,
        Validators.email,
      ]),
      sexo: this.formBuilder.control(``, [Validators.required]),
      equipe: this.formBuilder.control(``, {
        validators: [Validators.pattern(/[\d]/)],
      }),
    },
    {
      updateOn: 'blur',
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private funcionariosService: FuncionariosService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.createFuncionarioForm.valid) {
      const data = {
        nome: this.createFuncionarioForm.value.nome,
        cpf: this.createFuncionarioForm.value.cpf,
        dataNascimento: this.createFuncionarioForm.value.dataNascimento,
        sexo: this.createFuncionarioForm.value.sexo,
        email: this.createFuncionarioForm.value.email,
        telefone: this.createFuncionarioForm.value.telefone || null,
        endereco: this.createFuncionarioForm.value.endereco || null,
        equipe: Number(this.createFuncionarioForm.value.equipe) || null,
      };
      this.funcionariosService.postFuncionario(data).subscribe({
        next: () => this.router.navigate(['funcionarios']),
      });
    }
  }
}
