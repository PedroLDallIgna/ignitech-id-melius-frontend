import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDetailsComponent } from './projeto-details.component';

describe('ProjetoDetailsComponent', () => {
  let component: ProjetoDetailsComponent;
  let fixture: ComponentFixture<ProjetoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetoDetailsComponent]
    });
    fixture = TestBed.createComponent(ProjetoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
