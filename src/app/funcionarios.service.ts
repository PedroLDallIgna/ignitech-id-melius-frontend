import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';
import { Observable } from 'rxjs';

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
}
