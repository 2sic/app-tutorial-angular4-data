import { TestBed, inject } from '@angular/core/testing';

import { DnnModuleIdService } from './dnn-module-id.service';

describe('DnnModuleIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnnModuleIdService]
    });
  });

  it('should ...', inject([DnnModuleIdService], (service: DnnModuleIdService) => {
    expect(service).toBeTruthy();
  }));
});
