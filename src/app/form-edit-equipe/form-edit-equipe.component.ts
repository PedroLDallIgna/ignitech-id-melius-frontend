import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-edit-equipe',
  templateUrl: './form-edit-equipe.component.html',
  styleUrls: ['./form-edit-equipe.component.scss'],
})
export class FormEditEquipeComponent implements OnInit {
  editEquipeForm = this.formBuilder.group(
    {
      nome: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      area: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      descricao: this.formBuilder.control(''),
    },
    {
      updateOn: 'blur',
    }
  );
  areas!: Observable<{ Id_Area: number; Nome: string; Descricao: string }[]>;
  equipeId: string | null | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipeId = this.route.snapshot.paramMap.get('id');
    if (this.equipeId) {
      this.areas = this.httpClient.get<
        { Id_Area: number; Nome: string; Descricao: string }[]
      >(`http://localhost:3000/api/areas`);
      this.httpClient
        .get<Equipe>(`http://localhost:3000/api/equipes/${this.equipeId}`)
        .subscribe({
          next: (data) => {
            this.editEquipeForm.get('nome')?.setValue(data.Nome);
            this.editEquipeForm
              .get('descricao')
              ?.setValue(data.Descricao || null);
          },
        });
    } else {
      this.router.navigate(['equipes']);
    }
  }

  onSubmit() {
    if (this.editEquipeForm.valid) {
      const data = {
        nome: this.editEquipeForm.get('nome')?.value,
        descricao: this.editEquipeForm.get('descricao')?.value || null,
        area: this.editEquipeForm.get('area')?.value,
      };
      this.httpClient
        .patch('http://localhost:3000/api/equipes', data)
        .subscribe({
          next: () => this.router.navigate(['equipes']),
        });
    }
  }

  handleCancel() {
    this.router.navigate(['equipes', this.equipeId, 'details']);
  }
}
