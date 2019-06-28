import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosRecientesComponent } from './proyectos-recientes.component';

describe('ProyectosRecientesComponent', () => {
  let component: ProyectosRecientesComponent;
  let fixture: ComponentFixture<ProyectosRecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosRecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
