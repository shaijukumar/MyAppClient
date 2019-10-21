import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListDetailsComponent } from './app-list-details.component';

describe('AppListDetailsComponent', () => {
  let component: AppListDetailsComponent;
  let fixture: ComponentFixture<AppListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
