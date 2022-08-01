import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrInformationComponent } from './dr-information.component';

describe('DrInformationComponent', () => {
  let component: DrInformationComponent;
  let fixture: ComponentFixture<DrInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
