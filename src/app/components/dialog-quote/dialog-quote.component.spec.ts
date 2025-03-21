import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQuoteComponent } from './dialog-quote.component';

describe('DialogQuoteComponent', () => {
  let component: DialogQuoteComponent;
  let fixture: ComponentFixture<DialogQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
