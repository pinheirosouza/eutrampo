import { TestBed } from '@angular/core/testing';

import { AddServiceModalService } from './add-service-modal.service';

describe('AddServiceModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddServiceModalService = TestBed.get(AddServiceModalService);
    expect(service).toBeTruthy();
  });
});
