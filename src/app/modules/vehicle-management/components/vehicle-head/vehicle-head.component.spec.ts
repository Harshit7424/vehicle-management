import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHeadComponent } from './vehicle-head.component';

describe('VehicleHeadComponent', () => {
  let component: VehicleHeadComponent;
  let fixture: ComponentFixture<VehicleHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
