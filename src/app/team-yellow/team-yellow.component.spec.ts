import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamYellowComponent } from './team-yellow.component';

describe('TeamYellowComponent', () => {
  let component: TeamYellowComponent;
  let fixture: ComponentFixture<TeamYellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamYellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
