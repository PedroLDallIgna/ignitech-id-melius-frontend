import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionariosService } from '../funcionarios.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  funcionarios!: Observable<Funcionario[]>;
  deleteModal = false;
  selectedFuncionario: number | undefined;

  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit(): void {
    this.funcionarios = this.funcionariosService.getFuncionarios();
  }

  removeFuncionario(id: number) {
    this.selectedFuncionario = id;
    this.toggleModal();
  }

  toggleModal() {
    this.deleteModal = !this.deleteModal;
  }

  cancelaExclusao() {
    this.toggleModal();
  }

  confirmaExclusao() {
    if (this.selectedFuncionario) {
      this.funcionariosService
        .deleteFuncionario(this.selectedFuncionario)
        .subscribe();
      this.toggleModal();
      this.funcionarios = this.funcionariosService.getFuncionarios();
    }
  }
}
