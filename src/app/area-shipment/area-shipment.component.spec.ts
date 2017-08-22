import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaShipmentComponent } from './area-shipment.component';

describe('AreaShipmentComponent', () => {
  let component: AreaShipmentComponent;
  let fixture: ComponentFixture<AreaShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
