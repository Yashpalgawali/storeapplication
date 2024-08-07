import { TestBed } from '@angular/core/testing';

import { PoproductService } from './poproduct.service';

describe('PoproductService', () => {
  let service: PoproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
