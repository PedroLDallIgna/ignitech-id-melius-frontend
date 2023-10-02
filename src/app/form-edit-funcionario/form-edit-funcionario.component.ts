import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-edit-funcionario',
  templateUrl: './form-edit-funcionario.component.html',
  styleUrls: ['./form-edit-funcionario.component.scss'],
})
export class FormEditFuncionarioComponent implements OnInit {
  editFuncionarioForm = this.formBuilder.group(
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
  funcionarioId: string | undefined | null;

  equipes!: Observable<{ Id_Equipe: number; Nome: string }[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionariosService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.equipes = this.httpClient.get<{ Id_Equipe: number; Nome: string }[]>(
      `http://localhost:3000/api/equipes`
    );
    this.funcionarioId = this.route.snapshot.paramMap.get('id');
    if (this.funcionarioId)
      this.funcionarioService.getFuncionarioById(this.funcionarioId).subscribe({
        next: (data) => {
          this.editFuncionarioForm.get('nome')?.setValue(data.Nome);
          this.editFuncionarioForm.get('cpf')?.setValue(data.CPF);
          this.editFuncionarioForm
            .get('dataNascimento')
            ?.setValue(
              new Date(data.DataNascimento).toISOString().slice(0, 10)
            );
          this.editFuncionarioForm
            .get('endereco')
            ?.setValue(data.Endereco ?? '');
          this.editFuncionarioForm
            .get('telefone')
            ?.setValue(data.Telefone ?? '');
          this.editFuncionarioForm.get('email')?.setValue(data.Email);
          this.editFuncionarioForm.get('sexo')?.setValue(data.Sexo);
          this.editFuncionarioForm.get('equipe')?.setValue(data.Equipe ?? '');
        },
        error: () => this.router.navigate(['funcionarios']),
      });
    else this.router.navigate(['funcionarios']);
  }

  onSubmit() {
    if (this.funcionarioId && this.editFuncionarioForm.valid) {
      const data = {
        nome: this.editFuncionarioForm.value.nome,
        cpf: this.editFuncionarioForm.value.cpf,
        dataNascimento: this.editFuncionarioForm.value.dataNascimento,
        sexo: this.editFuncionarioForm.value.sexo,
        email: this.editFuncionarioForm.value.email,
        telefone: this.editFuncionarioForm.value.telefone || null,
        endereco: this.editFuncionarioForm.value.endereco || null,
        equipe: Number(this.editFuncionarioForm.value.equipe) || null,
      };
      this.funcionarioService
        .updateFuncionario(this.funcionarioId, data)
        .subscribe(() =>
          this.router.navigate(['funcionarios', this.funcionarioId, 'details'])
        );
    }
  }

  handleCancel() {
    this.router.navigate(['funcionarios', this.funcionarioId, 'details']);
  }
}
