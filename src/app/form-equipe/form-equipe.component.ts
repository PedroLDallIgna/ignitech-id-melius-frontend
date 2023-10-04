import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.scss'],
})
export class FormEquipeComponent implements OnInit {
  createEquipeForm = this.formBuilder.group(
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

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.areas = this.httpClient.get<
      { Id_Area: number; Nome: string; Descricao: string }[]
    >(`http://localhost:3000/api/areas`);
  }

  onSubmit() {
    if (this.createEquipeForm.valid) {
      const data = {
        nome: this.createEquipeForm.get('nome')?.value,
        descricao: this.createEquipeForm.get('descricao')?.value || null,
        area: this.createEquipeForm.get('area')?.value,
      };
      this.httpClient
        .post('http://localhost:3000/api/equipes', data)
        .subscribe({
          next: () => this.router.navigate(['equipes']),
        });
    }
  }
}
