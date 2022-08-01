import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexAllenComponent } from './rex-allen.component';

describe('RexAllenComponent', () => {
  let component: RexAllenComponent;
  let fixture: ComponentFixture<RexAllenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexAllenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RexAllenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
