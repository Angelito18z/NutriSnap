import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientBarComponent } from './nutrient-bar.component';

describe('NutrientBarComponent', () => {
  let component: NutrientBarComponent;
  let fixture: ComponentFixture<NutrientBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutrientBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrientBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
