import { TestBed } from '@angular/core/testing';

import { NutriDataService } from './nutri-data.service';

describe('NutriDataService', () => {
  let service: NutriDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutriDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
