import { Component } from '@angular/core';
import { Equipe } from '../equipe';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipe-details',
  templateUrl: './equipe-details.component.html',
  styleUrls: ['./equipe-details.component.scss'],
})
export class EquipeDetailsComponent {
  equipe: Equipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpClient
        .get<Equipe>(`http://localhost:3000/api/equipes/${id}`)
        .subscribe({
          next: (data) => (this.equipe = data),
          error: () => this.router.navigate(['equipes']),
        });
    }
  }
}
