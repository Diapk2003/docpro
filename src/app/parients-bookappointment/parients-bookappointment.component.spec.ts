import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParientsBookappointmentComponent } from './parients-bookappointment.component';

describe('ParientsBookappointmentComponent', () => {
  let component: ParientsBookappointmentComponent;
  let fixture: ComponentFixture<ParientsBookappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParientsBookappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParientsBookappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
