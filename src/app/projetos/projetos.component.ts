import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../projeto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent implements OnInit {
  projetos!: Observable<Projeto[]>;
  deleteModal = false;
  selectedProjeto: number | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.projetos = this.httpClient.get<Projeto[]>(
      `http://localhost:3000/api/projetos`
    );
  }

  removeProjeto(id: number) {
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
        .delete(`http://localhost:3000/api/projetos/${this.selectedProjeto}`)
        .subscribe();
      this.toggleModal();
      this.projetos = this.httpClient.get<Projeto[]>(
        `http://localhost:3000/api/projetos`
      );
    }
  }
}
