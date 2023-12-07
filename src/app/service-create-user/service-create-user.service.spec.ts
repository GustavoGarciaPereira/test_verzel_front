import { TestBed } from '@angular/core/testing';

import { ServiceCreateUserService } from './service-create-user.service';

describe('ServiceCreateUserService', () => {
  let service: ServiceCreateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCreateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
