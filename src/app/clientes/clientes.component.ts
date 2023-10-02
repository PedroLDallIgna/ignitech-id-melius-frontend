import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clientes!: Observable<Cliente[]>;
  deleteModal = false;
  selectedCliente: number | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.clientes = this.httpClient.get<Cliente[]>(
      `http://localhost:3000/api/clientes`
    );
  }

  removeFuncionario(id: number) {
    this.selectedCliente = id;
    this.toggleModal();
  }

  toggleModal() {
    this.deleteModal = !this.deleteModal;
  }

  cancelaExclusao() {
    this.toggleModal();
  }

  confirmaExclusao() {
    if (this.selectedCliente) {
      this.httpClient
        .delete(`http://localhost:3000/api/clientes/${this.selectedCliente}`)
        .subscribe();
      this.toggleModal();
      this.clientes = this.httpClient.get<Cliente[]>(
        `http://localhost:3000/api/clientes`
      );
    }
  }
}
