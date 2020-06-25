import { TestBed } from '@angular/core/testing';

import { ThuchanhPostService } from './thuchanh-post.service';

describe('ThuchanhPostService', () => {
  let service: ThuchanhPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThuchanhPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
