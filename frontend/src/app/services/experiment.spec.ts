import { TestBed } from '@angular/core/testing';

import { Experiment } from './experiment';

describe('Experiment', () => {
  let service: Experiment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experiment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
