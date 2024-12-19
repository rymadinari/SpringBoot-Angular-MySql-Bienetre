import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxingSoundsComponent } from './relaxing-sounds.component';

describe('RelaxingSoundsComponent', () => {
  let component: RelaxingSoundsComponent;
  let fixture: ComponentFixture<RelaxingSoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelaxingSoundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelaxingSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
