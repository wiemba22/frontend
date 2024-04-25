import { TestBed } from '@angular/core/testing';

import { Average2Service } from './average2.service';

describe('Average2Service', () => {
  let service: Average2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Average2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
