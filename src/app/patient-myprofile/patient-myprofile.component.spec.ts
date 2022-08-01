import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMyprofileComponent } from './patient-myprofile.component';

describe('PatientMyprofileComponent', () => {
  let component: PatientMyprofileComponent;
  let fixture: ComponentFixture<PatientMyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
