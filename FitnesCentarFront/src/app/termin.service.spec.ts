import { TestBed } from '@angular/core/testing';

import { DodajTerminService } from './termin.service';

describe('DodajTerminService', () => {
  let service: DodajTerminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodajTerminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
