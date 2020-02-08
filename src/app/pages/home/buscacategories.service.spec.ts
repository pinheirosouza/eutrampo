import { TestBed } from '@angular/core/testing';

import { BuscacategoriesService } from './buscacategories.service';

describe('BuscacategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscacategoriesService = TestBed.get(BuscacategoriesService);
    expect(service).toBeTruthy();
  });
});
