import { TestBed, inject } from '@angular/core/testing';

import { TravelApiService } from './travel-api.service';

describe('TravelApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelApiService]
    });
  });

  it('should be created', inject([TravelApiService], (service: TravelApiService) => {
    expect(service).toBeTruthy();
  }));
});
