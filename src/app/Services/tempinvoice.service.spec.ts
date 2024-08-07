import { TestBed } from '@angular/core/testing';

import { TempinvoiceService } from './tempinvoice.service';

describe('TempinvoiceService', () => {
  let service: TempinvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempinvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
