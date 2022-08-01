import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdownloadComponent } from './appdownload.component';

describe('AppdownloadComponent', () => {
  let component: AppdownloadComponent;
  let fixture: ComponentFixture<AppdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
