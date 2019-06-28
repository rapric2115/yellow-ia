import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowMmvComponent } from './yellow-mmv.component';

describe('YellowMmvComponent', () => {
  let component: YellowMmvComponent;
  let fixture: ComponentFixture<YellowMmvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowMmvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowMmvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
