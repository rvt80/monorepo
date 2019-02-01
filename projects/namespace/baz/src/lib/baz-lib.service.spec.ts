import { TestBed } from '@angular/core/testing';

import { BazLibService } from './baz-lib.service';

describe('BazLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BazLibService = TestBed.get(BazLibService);
    expect(service).toBeTruthy();
  });
});
