import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss'],
})
export class FormClienteComponent {
  createClienteForm = this.formBuilder.group(
    {
      nome: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      cnpj: this.formBuilder.control('', {
        validators: [
          Validators.required,
          Validators.pattern(/\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}/),
        ],
      }),
      telefone: this.formBuilder.control('', {
        validators: [Validators.pattern(/\(\d{2}\)\d{5}-\d{4}/)],
      }),
      endereco: this.formBuilder.control(''),
    },
    {
      updateOn: 'blur',
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  onSubmit() {
    if (this.createClienteForm.valid) {
      const data = {
        nome: this.createClienteForm.get('nome')?.value,
        cnpj: this.createClienteForm.get('cnpj')?.value,
        telefone: this.createClienteForm.get('telefone')?.value || null,
        endereco: this.createClienteForm.get('endereco')?.value || null,
      };
      this.httpClient
        .post('http://localhost:3000/api/clientes', data)
        .subscribe({
          next: () => this.router.navigate(['clientes']),
        });
    }
  }
}
