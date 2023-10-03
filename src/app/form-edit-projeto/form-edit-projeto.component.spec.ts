import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditProjetoComponent } from './form-edit-projeto.component';

describe('FormEditProjetoComponent', () => {
  let component: FormEditProjetoComponent;
  let fixture: ComponentFixture<FormEditProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditProjetoComponent]
    });
    fixture = TestBed.createComponent(FormEditProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
