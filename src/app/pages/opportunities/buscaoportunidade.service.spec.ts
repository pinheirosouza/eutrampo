import { TestBed } from '@angular/core/testing';

import { BuscaoportunidadeService } from './buscaoportunidade.service';

describe('BuscaoportunidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaoportunidadeService = TestBed.get(BuscaoportunidadeService);
    expect(service).toBeTruthy();
  });
});
