import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor(private http: HttpClient) {}

  public getFuncionarios() {
    return this.http.get<Funcionario[]>(
      'http://localhost:3000/api/funcionarios'
    );
  }
}
