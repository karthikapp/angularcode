import { TestBed } from '@angular/core/testing';

import { RestcallsService } from './restcalls.service';

describe('RestcallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestcallsService = TestBed.get(RestcallsService);
    expect(service).toBeTruthy();
  });
});
