import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario';
import { Projeto } from '../projeto';

@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.component.html',
  styleUrls: ['./form-tarefa.component.scss'],
})
export class FormTarefaComponent implements OnInit {
  createTarefaForm = this.formBuilder.group(
    {
      titulo: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      descricao: this.formBuilder.control(''),
      projeto: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      funcionario: this.formBuilder.control(''),
      estimativa: this.formBuilder.control(''),
    },
    {
      updateOn: 'blur',
    }
  );
  funcionarios!: Observable<Funcionario[]>;
  projetos!: Observable<Projeto[]>;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.funcionarios = this.httpClient.get<Funcionario[]>(
      `http://localhost:3000/api/funcionarios`
    );
    this.projetos = this.httpClient.get<Projeto[]>(
      `http://localhost:3000/api/projetos`
    );
  }

  onSubmit() {
    if (this.createTarefaForm.valid) {
      const data = {
        titulo: this.createTarefaForm.get('titulo')?.value,
        descricao: this.createTarefaForm.get('descricao')?.value || null,
        projeto: Number(this.createTarefaForm.get('projeto')?.value),
        funcionario:
          Number(this.createTarefaForm.get('funcionario')?.value) || null,
        estimativa:
          Number(this.createTarefaForm.get('estimativa')?.value) || null,
        estado: 1,
      };
      this.httpClient
        .post(`http://localhost:3000/api/tarefas`, data)
        .subscribe({
          next: () => this.router.navigate(['tarefas']),
        });
    }
  }
}
