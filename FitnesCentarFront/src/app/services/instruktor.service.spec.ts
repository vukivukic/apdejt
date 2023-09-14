import { TestBed } from '@angular/core/testing';

import { InstruktorService } from './instruktor.service';

describe('InstruktorService', () => {
  let service: InstruktorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstruktorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
