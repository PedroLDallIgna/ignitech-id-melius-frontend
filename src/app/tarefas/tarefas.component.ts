import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss'],
})
export class TarefasComponent implements OnInit {
  tarefas!: Observable<Tarefa[]>;
  deleteModal = false;
  selectedProjeto: number | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.tarefas = this.httpClient.get<Tarefa[]>(
      `http://localhost:3000/api/tarefas`
    );
  }

  removeTarefa(id: number) {
    this.selectedProjeto = id;
    this.toggleModal();
  }

  toggleModal() {
    this.deleteModal = !this.deleteModal;
  }

  cancelaExclusao() {
    this.toggleModal();
  }

  confirmaExclusao() {
    if (this.selectedProjeto) {
      this.httpClient
        .delete(`http://localhost:3000/api/tarefas/${this.selectedProjeto}`)
        .subscribe();
      this.toggleModal();
      this.tarefas = this.httpClient.get<Tarefa[]>(
        `http://localhost:3000/api/tarefas`
      );
    }
  }
}
