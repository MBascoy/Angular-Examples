import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpViewService } from './http-view.service';

describe('HttpViewService', () => {
  let service: HttpViewService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpViewService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check HttpClient', () => {
    const finalData = [{ userId: 1, id: 1, name: 'nombre', completed: true }];

    service
      .getInfo()
      .subscribe((data) => expect(data).toEqual(finalData));

    const req = httpTestingController.expectOne('http://127.0.0.1:8080/api/members');
    expect(req.request.method).toEqual('GET');
    req.flush(finalData);
  });
});
