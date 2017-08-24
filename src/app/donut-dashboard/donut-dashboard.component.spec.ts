import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutDashboardComponent } from './donut-dashboard.component';

describe('DonutDashboardComponent', () => {
  let component: DonutDashboardComponent;
  let fixture: ComponentFixture<DonutDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
