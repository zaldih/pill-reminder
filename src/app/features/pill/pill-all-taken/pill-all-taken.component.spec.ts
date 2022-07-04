import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillAllTakenComponent } from './pill-all-taken.component';

describe('PillAllTakenComponent', () => {
  let component: PillAllTakenComponent;
  let fixture: ComponentFixture<PillAllTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillAllTakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillAllTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
