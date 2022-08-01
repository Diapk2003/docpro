import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaryAstorComponent } from './mary-astor.component';

describe('MaryAstorComponent', () => {
  let component: MaryAstorComponent;
  let fixture: ComponentFixture<MaryAstorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaryAstorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaryAstorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
