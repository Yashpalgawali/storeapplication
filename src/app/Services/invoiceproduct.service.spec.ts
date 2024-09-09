import { TestBed } from '@angular/core/testing';

import { InvoiceproductService } from './invoiceproduct.service';

describe('InvoiceproductService', () => {
  let service: InvoiceproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
