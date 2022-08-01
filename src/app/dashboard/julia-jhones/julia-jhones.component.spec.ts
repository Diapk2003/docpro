import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuliaJhonesComponent } from './julia-jhones.component';

describe('JuliaJhonesComponent', () => {
  let component: JuliaJhonesComponent;
  let fixture: ComponentFixture<JuliaJhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuliaJhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuliaJhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
