import { TestBed } from '@angular/core/testing';

import { DevelopingService } from './developing.service';

describe('DevelopingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevelopingService = TestBed.get(DevelopingService);
    expect(service).toBeTruthy();
  });
});
