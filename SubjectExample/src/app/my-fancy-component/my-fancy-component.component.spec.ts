import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFancyComponentComponent } from './my-fancy-component.component';

describe('MyFancyComponentComponent', () => {
  let component: MyFancyComponentComponent;
  let fixture: ComponentFixture<MyFancyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFancyComponentComponent]
    });
    fixture = TestBed.createComponent(MyFancyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
