import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormShareClassComponent } from './complex-form-share-class.component';

describe('ComplexFormShareClassComponent', () => {
  let component: ComplexFormShareClassComponent;
  let fixture: ComponentFixture<ComplexFormShareClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormShareClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormShareClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
