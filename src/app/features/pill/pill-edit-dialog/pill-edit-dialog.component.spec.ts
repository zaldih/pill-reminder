import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillEditDialogComponent } from './pill-edit-dialog.component';

describe('PillEditDialogComponent', () => {
  let component: PillEditDialogComponent;
  let fixture: ComponentFixture<PillEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
