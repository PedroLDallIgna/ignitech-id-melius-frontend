import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from '../projeto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-edit-projeto',
  templateUrl: './form-edit-projeto.component.html',
  styleUrls: ['./form-edit-projeto.component.scss'],
})
export class FormEditProjetoComponent implements OnInit {
  editProjetoForm = this.formBuilder.group(
    {
      nome: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      descricao: this.formBuilder.control(''),
      equipe: this.formBuilder.control(''),
      cliente: this.formBuilder.control({
        value: '',
        disabled: true,
      }),
      dataInicio: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      dataEntregaPrevista: this.formBuilder.control(''),
      dataEntregaEfetiva: this.formBuilder.control(''),
      estado: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
    },
    {
      updateOn: 'blur',
    }
  );
  projetoId: string | null | undefined;
  equipes!: Observable<{ Id_Equipe: number; Nome: string }[]>;
  equipeId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projetoId = this.route.snapshot.paramMap.get('id');
    if (this.projetoId) {
      this.equipes = this.httpClient.get<{ Id_Equipe: number; Nome: string }[]>(
        `http://localhost:3000/api/equipes`
      );
      this.httpClient
        .get<Projeto>(`http://localhost:3000/api/projetos/${this.projetoId}`)
        .subscribe({
          next: (data) => {
            this.editProjetoForm.get('nome')?.setValue(data.Nome);
            this.editProjetoForm
              .get('descricao')
              ?.setValue(data.Descricao || ``);
            this.editProjetoForm.get('cliente')?.setValue(`${data.Cliente}`);
            this.editProjetoForm.get('equipe')?.setValue(`${data.Equipe}`);
            this.equipeId = data.Equipe;
            this.editProjetoForm
              .get('dataInicio')
              ?.setValue(new Date(data.DataInicio).toISOString().slice(0, 10));
            if (data.DataEntregaPrevista)
              this.editProjetoForm
                .get('dataEntregaPrevista')
                ?.setValue(
                  new Date(data.DataEntregaPrevista).toISOString().slice(0, 10)
                );
            if (data.DataEntregaEfetiva)
              this.editProjetoForm
                .get('dataEntregaEfetiva')
                ?.setValue(
                  new Date(data.DataEntregaEfetiva).toISOString().slice(0, 10)
                );
            this.editProjetoForm.get('estado')?.setValue(`${data.Estado}`);
          },
        });
    } else {
      this.router.navigate(['projetos']);
    }
  }

  onSubmit() {
    if (this.editProjetoForm.valid) {
      const data = {
        nome: this.editProjetoForm.get('nome')?.value,
        descricao: this.editProjetoForm.get('descricao')?.value,
        cliente: Number(this.editProjetoForm.get('cliente')?.value),
        equipe: Number(this.editProjetoForm.get('equipe')?.value) || null,
        dataInicio: this.editProjetoForm.get('dataInicio')?.value,
        dataEntregaPrevista:
          this.editProjetoForm.get('dataEntregaPrevista')?.value || null,
        dataEntregaEfetiva:
          this.editProjetoForm.get('dataEntregaEfetiva')?.value || null,
      };
      this.httpClient
        .patch(`http://localhost:3000/api/projetos/${this.projetoId}`, data)
        .subscribe({
          next: () => this.router.navigate(['projetos']),
        });
    }
  }

  handleCancel() {
    this.router.navigate(['projetos', this.projetoId, 'details']);
  }
}
