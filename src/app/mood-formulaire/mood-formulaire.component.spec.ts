import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodFormulaireComponent } from './mood-formulaire.component';

describe('MoodFormulaireComponent', () => {
  let component: MoodFormulaireComponent;
  let fixture: ComponentFixture<MoodFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodFormulaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
