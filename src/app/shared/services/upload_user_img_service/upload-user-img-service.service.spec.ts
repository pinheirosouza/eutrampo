import { TestBed } from '@angular/core/testing';

import { UploadUserImgServiceService } from './upload-user-img-service.service';

describe('UploadUserImgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadUserImgServiceService = TestBed.get(UploadUserImgServiceService);
    expect(service).toBeTruthy();
  });
});
