import { TestBed } from '@angular/core/testing';

import { QuestiongroupserviceService } from './questiongroupservice.service';

describe('QuestiongroupserviceService', () => {
  let service: QuestiongroupserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestiongroupserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
