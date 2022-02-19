import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoValidationComponent } from './hijo-validation.component';

describe('HijoValidationComponent', () => {
  let component: HijoValidationComponent;
  let fixture: ComponentFixture<HijoValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
