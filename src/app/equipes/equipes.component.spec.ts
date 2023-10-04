import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipesComponent } from './equipes.component';

describe('EquipesComponent', () => {
  let component: EquipesComponent;
  let fixture: ComponentFixture<EquipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipesComponent]
    });
    fixture = TestBed.createComponent(EquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
