import { TestBed } from '@angular/core/testing';

import { ThuchanhYoutubeService } from './thuchanh-youtube.service';

describe('ThuchanhYoutubeService', () => {
  let service: ThuchanhYoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThuchanhYoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
