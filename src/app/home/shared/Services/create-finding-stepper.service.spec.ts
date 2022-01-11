import { TestBed } from '@angular/core/testing';

import { CreateFindingStepperService } from './create-finding-stepper.service';

describe('CreateFindingStepperService', () => {
  let service: CreateFindingStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateFindingStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
