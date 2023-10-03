import { Component } from '@angular/core';
import { Projeto } from '../projeto';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projeto-details',
  templateUrl: './projeto-details.component.html',
  styleUrls: ['./projeto-details.component.scss'],
})
export class ProjetoDetailsComponent {
  projeto: Projeto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpClient
        .get<Projeto>(`http://localhost:3000/api/projetos/${id}`)
        .subscribe({
          next: (data) => (this.projeto = data),
          error: () => this.router.navigate(['projetos']),
        });
    }
  }
}
