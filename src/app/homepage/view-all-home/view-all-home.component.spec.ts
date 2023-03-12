import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllHomeComponent } from './view-all-home.component';

describe('ViewAllHomeComponent', () => {
  let component: ViewAllHomeComponent;
  let fixture: ComponentFixture<ViewAllHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
