import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormGeneralComponent } from './complex-form-general.component';

describe('ComplexFormGeneralComponent', () => {
  let component: ComplexFormGeneralComponent;
  let fixture: ComponentFixture<ComplexFormGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
