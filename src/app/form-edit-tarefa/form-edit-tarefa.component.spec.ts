import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTarefaComponent } from './form-edit-tarefa.component';

describe('FormEditTarefaComponent', () => {
  let component: FormEditTarefaComponent;
  let fixture: ComponentFixture<FormEditTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditTarefaComponent]
    });
    fixture = TestBed.createComponent(FormEditTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
