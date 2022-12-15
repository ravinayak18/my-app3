import { TestBed } from '@angular/core/testing';

import { FlipkartappService } from './flipkartapp.service';

describe('FlipkartappService', () => {
  let service: FlipkartappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
