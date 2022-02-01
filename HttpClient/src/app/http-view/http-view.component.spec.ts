import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpViewComponent } from './http-view.component';

describe('HttpViewComponent', () => {
  let component: HttpViewComponent;
  let fixture: ComponentFixture<HttpViewComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpViewComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check HttpClient', () => {
    const finalData = [{ userId: 1, id: 1, name: 'nombre', completed: true }];

    const req = httpTestingController.expectOne("http://127.0.0.1:8080/api/members");
    expect(req.request.method).toEqual('GET');
    req.flush(finalData);
    expect(component.messageObject).toEqual(finalData);
  });
});
