import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FormEditFuncionarioComponent } from './form-edit-funcionario/form-edit-funcionario.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
  },
  {
    path: 'funcionarios/new',
    component: FormFuncionarioComponent,
  },
  {
    path: 'funcionarios/:id/details',
    component: FuncionarioDetailsComponent,
  },
  {
    path: 'funcionarios/:id/edit',
    component: FormEditFuncionarioComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'clientes/new',
    component: FormClienteComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
