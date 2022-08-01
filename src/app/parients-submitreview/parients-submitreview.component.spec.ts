import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParientsSubmitreviewComponent } from './parients-submitreview.component';

describe('ParientsSubmitreviewComponent', () => {
  let component: ParientsSubmitreviewComponent;
  let fixture: ComponentFixture<ParientsSubmitreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParientsSubmitreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParientsSubmitreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
