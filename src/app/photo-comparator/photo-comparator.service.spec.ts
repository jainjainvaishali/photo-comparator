import { TestBed } from '@angular/core/testing';

import { PhotoComparatorService } from './photo-comparator.service';

describe('PhotoComparatorService', () => {
  let service: PhotoComparatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoComparatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
