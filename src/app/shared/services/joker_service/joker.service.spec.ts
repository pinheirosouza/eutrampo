import { TestBed } from '@angular/core/testing';

import { JokerService } from './joker.service';

describe('JokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokerService = TestBed.get(JokerService);
    expect(service).toBeTruthy();
  });
});
