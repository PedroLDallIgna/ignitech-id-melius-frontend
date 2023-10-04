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
import { EquipeDetailsComponent } from './equipe-details/equipe-details.component';
import { FormEditEquipeComponent } from './form-edit-equipe/form-edit-equipe.component';

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
    FormEditClienteComponent,
    ProjetosComponent,
    ProjetoDetailsComponent,
    FormEditProjetoComponent,
    FormProjetoComponent,
    TarefasComponent,
    TarefaDetailsComponent,
    FormTarefaComponent,
    FormEditTarefaComponent,
    EquipesComponent,
    FormEquipeComponent,
    EquipeDetailsComponent,
    FormEditEquipeComponent,
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
