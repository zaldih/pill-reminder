import { TestBed } from '@angular/core/testing';

import { PillsService } from './pills.service';

describe('PillsService', () => {
  let service: PillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
