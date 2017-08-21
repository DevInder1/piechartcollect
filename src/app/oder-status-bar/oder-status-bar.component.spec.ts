import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderStatusBarComponent } from './oder-status-bar.component';

describe('OderStatusBarComponent', () => {
  let component: OderStatusBarComponent;
  let fixture: ComponentFixture<OderStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderStatusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
