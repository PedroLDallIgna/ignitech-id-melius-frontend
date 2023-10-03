import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form-projeto',
  templateUrl: './form-projeto.component.html',
  styleUrls: ['./form-projeto.component.scss'],
})
export class FormProjetoComponent implements OnInit {
  createProjetoForm = this.formBuilder.group(
    {
      nome: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      descricao: this.formBuilder.control(''),
      equipe: this.formBuilder.control(''),
      cliente: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      dataInicio: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      dataEntregaPrevista: this.formBuilder.control(''),
      dataEntregaEfetiva: this.formBuilder.control(''),
    },
    {
      updateOn: 'blur',
    }
  );
  equipes!: Observable<{ Id_Equipe: number; Nome: string }[]>;
  clientes!: Observable<Cliente[]>;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipes = this.httpClient.get<{ Id_Equipe: number; Nome: string }[]>(
      `http://localhost:3000/api/equipes`
    );
    this.clientes = this.httpClient.get<Cliente[]>(
      `http://localhost:3000/api/clientes`
    );
  }

  onSubmit() {
    if (this.createProjetoForm.valid) {
      const data = {
        nome: this.createProjetoForm.get('nome')?.value,
        descricao: this.createProjetoForm.get('descricao')?.value,
        cliente: Number(this.createProjetoForm.get('cliente')?.value),
        equipe: Number(this.createProjetoForm.get('equipe')?.value) || null,
        dataInicio: this.createProjetoForm.get('dataInicio')?.value,
        dataEntregaPrevista:
          this.createProjetoForm.get('dataEntregaPrevista')?.value || null,
        dataEntregaEfetiva:
          this.createProjetoForm.get('dataEntregaEfetiva')?.value || null,
        estado: 1,
      };
      this.httpClient
        .post(`http://localhost:3000/api/projetos`, data)
        .subscribe({
          next: () => this.router.navigate(['projetos']),
        });
    }
  }
}
