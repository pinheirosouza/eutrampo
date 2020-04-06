import { TestBed } from '@angular/core/testing';

import { BuscanoticiaService } from './buscanoticia.service';

describe('BuscanoticiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscanoticiaService = TestBed.get(BuscanoticiaService);
    expect(service).toBeTruthy();
  });
});
