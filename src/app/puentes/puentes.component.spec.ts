import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuentesComponent } from './puentes.component';

describe('PuentesComponent', () => {
  let component: PuentesComponent;
  let fixture: ComponentFixture<PuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
