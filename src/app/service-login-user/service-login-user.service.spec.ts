import { TestBed } from '@angular/core/testing';

import { AuthService } from './service-login-user.service';

describe('ServiceLoginUserService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
