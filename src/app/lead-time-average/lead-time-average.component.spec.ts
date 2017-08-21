import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTimeAverageComponent } from './lead-time-average.component';

describe('LeadTimeAverageComponent', () => {
  let component: LeadTimeAverageComponent;
  let fixture: ComponentFixture<LeadTimeAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadTimeAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadTimeAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
