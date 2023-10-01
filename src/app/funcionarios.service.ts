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

  public postFuncionario<T>(data: T) {
    return this.http.post('http://localhost:3000/api/funcionarios', data);
  }

  public deleteFuncionario(id: number) {
    return this.http.delete(`http://localhost:3000/api/funcionarios/${id}`);
  }

  public getFuncionarioById(id: string) {
    return this.http.get<Funcionario>(
      `http://localhost:3000/api/funcionarios/${id}`
    );
  }
}
