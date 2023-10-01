import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';

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
