import { TestBed } from '@angular/core/testing';

import { ResponseAlertService } from './response-alert.service';

describe('ResponseToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseAlertService = TestBed.get(ResponseAlertService);
    expect(service).toBeTruthy();
  });
});
