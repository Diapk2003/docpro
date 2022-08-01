import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParientsComponent } from './parients.component';

describe('ParientsComponent', () => {
  let component: ParientsComponent;
  let fixture: ComponentFixture<ParientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
