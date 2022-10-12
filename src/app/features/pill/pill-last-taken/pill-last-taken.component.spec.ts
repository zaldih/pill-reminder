import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillLastTakenComponent } from './pill-last-taken.component';

describe('PillLastTakenComponent', () => {
  let component: PillLastTakenComponent;
  let fixture: ComponentFixture<PillLastTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PillLastTakenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillLastTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
