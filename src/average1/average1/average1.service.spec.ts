import { TestBed } from '@angular/core/testing';

import { Average1Service } from './average1.service';

describe('Average1Service', () => {
  let service: Average1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Average1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
