import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellaAdlerComponent } from './stella-adler.component';

describe('StellaAdlerComponent', () => {
  let component: StellaAdlerComponent;
  let fixture: ComponentFixture<StellaAdlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellaAdlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StellaAdlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
