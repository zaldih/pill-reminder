import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillTakeComponent } from './pill-take.component';

describe('PillTakeComponent', () => {
  let component: PillTakeComponent;
  let fixture: ComponentFixture<PillTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillTakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
