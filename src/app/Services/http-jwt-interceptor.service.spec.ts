import { TestBed } from '@angular/core/testing';

import { HttpJwtInterceptorService } from './http-jwt-interceptor.service';

describe('HttpJwtInterceptorService', () => {
  let service: HttpJwtInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpJwtInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
