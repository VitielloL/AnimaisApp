import { TestBed } from '@angular/core/testing';

import { Animallistv2Service } from './animallistv2.service';

describe('Animallistv2Service', () => {
  let service: Animallistv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Animallistv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
