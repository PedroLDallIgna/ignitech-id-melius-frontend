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

  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit(): void {
    this.funcionarios = this.funcionariosService.getFuncionarios();
  }
}
