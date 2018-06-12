import { TestBed, inject } from '@angular/core/testing';

import { ZcLoginService } from './zc-login.service';

describe('ZcLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZcLoginService]
    });
  });

  it('should be created', inject([ZcLoginService], (service: ZcLoginService) => {
    expect(service).toBeTruthy();
  }));
});
