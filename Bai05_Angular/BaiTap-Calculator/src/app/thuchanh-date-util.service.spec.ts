import { TestBed } from '@angular/core/testing';

import { ThuchanhDateUtilService } from './thuchanh-date-util.service';

describe('ThuchanhDateUtilService', () => {
  let service: ThuchanhDateUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThuchanhDateUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
