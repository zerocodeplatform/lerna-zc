import { TestBed, inject } from '@angular/core/testing';

import { ZcMenuService } from './zc-menu.service';

describe('ZcMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZcMenuService]
    });
  });

  it('should be created', inject([ZcMenuService], (service: ZcMenuService) => {
    expect(service).toBeTruthy();
  }));
});
