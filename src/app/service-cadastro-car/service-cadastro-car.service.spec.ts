import { TestBed } from '@angular/core/testing';

import { ServiceCadastroCarService } from './service-cadastro-car.service';

describe('ServiceCadastroCarService', () => {
  let service: ServiceCadastroCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCadastroCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
