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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuncionariosComponent,
    FormFuncionarioComponent,
    FuncionarioDetailsComponent,
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
