import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpViewComponent } from './http-view.component';

describe('HttpViewComponent', () => {
  let component: HttpViewComponent;
  let fixture: ComponentFixture<HttpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
