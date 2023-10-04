import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario';
import { Projeto } from '../projeto';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-relatorio-tarefas',
  templateUrl: './relatorio-tarefas.component.html',
  styleUrls: ['./relatorio-tarefas.component.scss']
})
export class RelatorioTarefasComponent implements OnInit {
  tarefas!: Observable<{Tarefa: string, Id_Funcionario: number, Funcionario: string, Id_Projeto: number, Projeto: string, Id_Estado: number, Status: String, Estimativa: number}[]>
  funcionarios!: Observable<Funcionario[]>;
  projetos!: Observable<Projeto[]>;

  queryForm = this.formBuilder.group({
    funcionario: '',
    projeto: '',
    estado: ''
  });

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.funcionarios = this.httpClient.get<Funcionario[]>('http://localhost:3000/api/funcionarios');
    this.projetos = this.httpClient.get<Projeto[]>('http://localhost:3000/api/projetos');
  }

  onSubmit() {
    const params = new URLSearchParams();
    if (this.queryForm.get('funcionario')?.value !== '') {
      params.set("funcionario", this.queryForm.get('funcionario')?.value ?? '')
    }
    if (this.queryForm.get('projeto')?.value) {
      params.set("projeto", this.queryForm.get('projeto')?.value ?? '')
    }
    if (this.queryForm.get('estado')?.value) {
      params.set("estado", this.queryForm.get('estado')?.value ?? '')
    }

    if (params.toString().length > 0) {
      this.tarefas = this.httpClient.get<{Tarefa: string, Id_Funcionario: number, Funcionario: string, Id_Projeto: number, Projeto: string, Id_Estado: number, Status: String, Estimativa: number}[]>(`http://localhost:3000/api/tarefas?${params.toString()}`);
    }
  }
}
