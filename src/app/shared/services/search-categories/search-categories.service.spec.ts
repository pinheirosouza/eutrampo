import { TestBed } from '@angular/core/testing';

import { SearchCategoriesService } from './search-categories.service';

describe('SearchCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCategoriesService = TestBed.get(SearchCategoriesService);
    expect(service).toBeTruthy();
  });
});
