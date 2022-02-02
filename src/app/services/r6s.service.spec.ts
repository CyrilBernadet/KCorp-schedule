import { TestBed } from '@angular/core/testing';

import { R6sService } from './r6s.service';

describe('R6sService', () => {
  let service: R6sService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(R6sService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
