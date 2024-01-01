import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFancyComponent2Component } from './my-fancy-component-2.component';

describe('MyFancyComponent2Component', () => {
  let component: MyFancyComponent2Component;
  let fixture: ComponentFixture<MyFancyComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFancyComponent2Component]
    });
    fixture = TestBed.createComponent(MyFancyComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
