import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FormEditFuncionarioComponent } from './form-edit-funcionario/form-edit-funcionario.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { FormEditClienteComponent } from './form-edit-cliente/form-edit-cliente.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoDetailsComponent } from './projeto-details/projeto-details.component';
import { FormEditProjetoComponent } from './form-edit-projeto/form-edit-projeto.component';
import { FormProjetoComponent } from './form-projeto/form-projeto.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefaDetailsComponent } from './tarefa-details/tarefa-details.component';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';
import { FormEditTarefaComponent } from './form-edit-tarefa/form-edit-tarefa.component';
import { EquipesComponent } from './equipes/equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';

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
    path: 'clientes/:id/details',
    component: ClienteDetailsComponent,
  },
  {
    path: 'clientes/:id/edit',
    component: FormEditClienteComponent,
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
  },
  {
    path: 'projetos/new',
    component: FormProjetoComponent,
  },
  {
    path: 'projetos/:id/details',
    component: ProjetoDetailsComponent,
  },
  {
    path: 'projetos/:id/edit',
    component: FormEditProjetoComponent,
  },
  {
    path: 'tarefas',
    component: TarefasComponent,
  },
  {
    path: 'tarefas/new',
    component: FormTarefaComponent,
  },
  {
    path: 'tarefas/:id/details',
    component: TarefaDetailsComponent,
  },
  {
    path: 'tarefas/:id/edit',
    component: FormEditTarefaComponent,
  },
  {
    path: 'equipes',
    component: EquipesComponent,
  },
  {
    path: 'equipes/new',
    component: FormEquipeComponent,
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
