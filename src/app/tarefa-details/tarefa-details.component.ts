import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from '../projeto';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-tarefa-details',
  templateUrl: './tarefa-details.component.html',
  styleUrls: ['./tarefa-details.component.scss'],
})
export class TarefaDetailsComponent implements OnInit {
  tarefa: Tarefa | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpClient
        .get<Tarefa>(`http://localhost:3000/api/tarefas/${id}`)
        .subscribe({
          next: (data) => (this.tarefa = data),
          error: () => this.router.navigate(['tarefas']),
        });
    }
  }
}
