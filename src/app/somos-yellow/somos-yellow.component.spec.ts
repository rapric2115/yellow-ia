import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomosYellowComponent } from './somos-yellow.component';

describe('SomosYellowComponent', () => {
  let component: SomosYellowComponent;
  let fixture: ComponentFixture<SomosYellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomosYellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomosYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
