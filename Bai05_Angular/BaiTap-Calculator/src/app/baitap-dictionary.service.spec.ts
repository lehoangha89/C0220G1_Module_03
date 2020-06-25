import { TestBed } from '@angular/core/testing';

import { BaitapDictionaryService } from './baitap-dictionary.service';

describe('BaitapDictionaryService', () => {
  let service: BaitapDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaitapDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
