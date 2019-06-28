import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasCalidadComponent } from './politicas-calidad.component';

describe('PoliticasCalidadComponent', () => {
  let component: PoliticasCalidadComponent;
  let fixture: ComponentFixture<PoliticasCalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasCalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
