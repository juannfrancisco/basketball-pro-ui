import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLastResultsComponent } from './team-last-results.component';

describe('TeamLastResultsComponent', () => {
  let component: TeamLastResultsComponent;
  let fixture: ComponentFixture<TeamLastResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamLastResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLastResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
