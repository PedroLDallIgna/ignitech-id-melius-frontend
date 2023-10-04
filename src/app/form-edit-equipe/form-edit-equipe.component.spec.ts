import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEquipeComponent } from './form-edit-equipe.component';

describe('FormEditEquipeComponent', () => {
  let component: FormEditEquipeComponent;
  let fixture: ComponentFixture<FormEditEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditEquipeComponent]
    });
    fixture = TestBed.createComponent(FormEditEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
