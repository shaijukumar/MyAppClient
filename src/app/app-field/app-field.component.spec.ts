import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFieldComponent } from './app-field.component';

describe('AppFieldComponent', () => {
  let component: AppFieldComponent;
  let fixture: ComponentFixture<AppFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
