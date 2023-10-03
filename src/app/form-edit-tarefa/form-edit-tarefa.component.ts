import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario';
import { Projeto } from '../projeto';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-form-edit-tarefa',
  templateUrl: './form-edit-tarefa.component.html',
  styleUrls: ['./form-edit-tarefa.component.scss'],
})
export class FormEditTarefaComponent {
  editTarefaForm = this.formBuilder.group(
    {
      titulo: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      descricao: this.formBuilder.control(''),
      projeto: this.formBuilder.control(
        {
          value: '',
          disabled: true,
        },
        {
          validators: [Validators.required],
        }
      ),
      funcionario: this.formBuilder.control(''),
      estimativa: this.formBuilder.control(''),
      estado: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
    },
    {
      updateOn: 'blur',
    }
  );
  tarefaId: string | null | undefined;
  funcionarios!: Observable<Funcionario[]>;
  projetos!: Observable<Projeto[]>;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tarefaId = this.route.snapshot.paramMap.get('id');
    if (this.tarefaId) {
      this.funcionarios = this.httpClient.get<Funcionario[]>(
        `http://localhost:3000/api/funcionarios`
      );
      this.projetos = this.httpClient.get<Projeto[]>(
        `http://localhost:3000/api/projetos`
      );
      this.httpClient
        .get<Tarefa>(`http://localhost:3000/api/tarefas/${this.tarefaId}`)
        .subscribe({
          next: (data) => {
            this.editTarefaForm.get('titulo')?.setValue(data.Titulo);
            this.editTarefaForm
              .get('descricao')
              ?.setValue(data.Descricao || ``);
            this.editTarefaForm.get('projeto')?.setValue(`${data.Projeto}`);
            this.editTarefaForm
              .get('funcionario')
              ?.setValue(`${data.Funcionario}`);
            this.editTarefaForm
              .get('estimativa')
              ?.setValue(`${data.Estimativa}`);
            this.editTarefaForm.get('estado')?.setValue(`${data.Estado}`);
          },
        });
    } else {
      this.router.navigate(['projetos']);
    }
  }

  onSubmit() {
    if (this.editTarefaForm.valid) {
      const data = {
        titulo: this.editTarefaForm.get('titulo')?.value,
        descricao: this.editTarefaForm.get('descricao')?.value || null,
        projeto: Number(this.editTarefaForm.get('projeto')?.value),
        funcionario:
          Number(this.editTarefaForm.get('funcionario')?.value) || null,
        estimativa:
          Number(this.editTarefaForm.get('estimativa')?.value) || null,
        estado: Number(this.editTarefaForm.get('estado')?.value),
      };
      this.httpClient
        .patch(`http://localhost:3000/api/tarefas/${this.tarefaId}`, data)
        .subscribe({
          next: () => this.router.navigate(['tarefas']),
        });
    }
  }

  handleCancel() {
    this.router.navigate(['tarefas', this.tarefaId, 'details']);
  }
}
