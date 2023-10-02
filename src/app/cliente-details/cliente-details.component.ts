import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.scss'],
})
export class ClienteDetailsComponent {
  cliente: Cliente | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpClient
        .get<Cliente>(`http://localhost:3000/api/clientes/${id}`)
        .subscribe({
          next: (data) => (this.cliente = data),
          error: () => this.router.navigate(['clientes']),
        });
    }
  }
}
