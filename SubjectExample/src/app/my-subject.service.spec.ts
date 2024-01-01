import { TestBed } from '@angular/core/testing';

import { MySubjectService } from './my-subject.service';

describe('MySubjectService', () => {
  let service: MySubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
