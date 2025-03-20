import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriDataComponent } from './nutri-data.component';

describe('NutriDataComponent', () => {
  let component: NutriDataComponent;
  let fixture: ComponentFixture<NutriDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutriDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutriDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
