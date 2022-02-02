import { TestBed } from '@angular/core/testing';

import { CsgoService } from './csgo.service';

describe('CsgoService', () => {
  let service: CsgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
