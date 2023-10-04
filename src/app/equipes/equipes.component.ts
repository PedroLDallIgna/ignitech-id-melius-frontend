import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../equipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss'],
})
export class EquipesComponent {
  equipes!: Observable<Equipe[]>;
  deleteModal = false;
  selectedEquipe: number | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.equipes = this.httpClient.get<Equipe[]>(
      `http://localhost:3000/api/equipes`
    );
  }

  removeEquipe(id: number) {
    this.selectedEquipe = id;
    this.toggleModal();
  }

  toggleModal() {
    this.deleteModal = !this.deleteModal;
  }

  cancelaExclusao() {
    this.toggleModal();
  }

  confirmaExclusao() {
    if (this.selectedEquipe) {
      this.httpClient
        .delete(`http://localhost:3000/api/equipes/${this.selectedEquipe}`)
        .subscribe();
      this.toggleModal();
    }
  }
}
