import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasSeguridadComponent } from './politicas-seguridad.component';

describe('PoliticasSeguridadComponent', () => {
  let component: PoliticasSeguridadComponent;
  let fixture: ComponentFixture<PoliticasSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
