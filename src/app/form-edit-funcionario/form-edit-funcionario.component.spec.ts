import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditFuncionarioComponent } from './form-edit-funcionario.component';

describe('FormEditFuncionarioComponent', () => {
  let component: FormEditFuncionarioComponent;
  let fixture: ComponentFixture<FormEditFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditFuncionarioComponent]
    });
    fixture = TestBed.createComponent(FormEditFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
