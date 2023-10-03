import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form-edit-cliente',
  templateUrl: './form-edit-cliente.component.html',
  styleUrls: ['./form-edit-cliente.component.scss'],
})
export class FormEditClienteComponent implements OnInit {
  editClienteForm = this.formBuilder.group(
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
  clienteId: string | null | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('id');
    if (this.clienteId) {
      this.httpClient
        .get<Cliente>(`http://localhost:3000/api/clientes/${this.clienteId}`)
        .subscribe({
          next: (data) => {
            this.editClienteForm.get('nome')?.setValue(data.Nome);
            this.editClienteForm.get('cnpj')?.setValue(data.CNPJ);
            this.editClienteForm.get('telefone')?.setValue(data.Telefone);
            this.editClienteForm.get('endereco')?.setValue(data.Endereco);
          },
        });
    } else {
      this.router.navigate(['clientes']);
    }
  }

  onSubmit() {
    if (this.editClienteForm.valid) {
      const data = {
        nome: this.editClienteForm.get('nome')?.value,
        cnpj: this.editClienteForm.get('cnpj')?.value,
        telefone: this.editClienteForm.get('telefone')?.value || null,
        endereco: this.editClienteForm.get('endereco')?.value || null,
      };
      this.httpClient
        .patch(`http://localhost:3000/api/clientes/${this.clienteId}`, data)
        .subscribe({
          next: () => this.router.navigate(['clientes']),
        });
    }
  }

  handleCancel() {
    this.router.navigate(['clientes', this.clienteId, 'details']);
  }
}
