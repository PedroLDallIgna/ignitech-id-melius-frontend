import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.scss'],
})
export class FuncionarioDetailsComponent implements OnInit {
  funcionario: Funcionario | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionariosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.funcionarioService.getFuncionarioById(id).subscribe({
        next: (data) => (this.funcionario = data),
        error: () => this.router.navigate(['funcionarios']),
      });
    }
  }
}
