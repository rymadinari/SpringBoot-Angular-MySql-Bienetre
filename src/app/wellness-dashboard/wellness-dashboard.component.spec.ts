import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessDashboardComponent } from './wellness-dashboard.component';

describe('WellnessDashboardComponent', () => {
  let component: WellnessDashboardComponent;
  let fixture: ComponentFixture<WellnessDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WellnessDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellnessDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
