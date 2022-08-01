import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFavouriteComponent } from './patient-favourite.component';

describe('PatientFavouriteComponent', () => {
  let component: PatientFavouriteComponent;
  let fixture: ComponentFixture<PatientFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
