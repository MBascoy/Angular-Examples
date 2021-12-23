import { TestBed } from '@angular/core/testing';

import { HttpViewService } from './http-view.service';

describe('HttpViewService', () => {
  let service: HttpViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
