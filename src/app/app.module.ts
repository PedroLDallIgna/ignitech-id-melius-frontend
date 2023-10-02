import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FormEditFuncionarioComponent } from './form-edit-funcionario/form-edit-funcionario.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuncionariosComponent,
    FormFuncionarioComponent,
    FuncionarioDetailsComponent,
    FormEditFuncionarioComponent,
    ClientesComponent,
    FormClienteComponent,
    ClienteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
