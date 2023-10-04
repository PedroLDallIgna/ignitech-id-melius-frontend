import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioTarefasComponent } from './relatorio-tarefas.component';

describe('RelatorioTarefasComponent', () => {
  let component: RelatorioTarefasComponent;
  let fixture: ComponentFixture<RelatorioTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioTarefasComponent]
    });
    fixture = TestBed.createComponent(RelatorioTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
