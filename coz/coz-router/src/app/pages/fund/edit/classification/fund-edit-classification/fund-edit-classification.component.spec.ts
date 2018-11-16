import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundEditClassificationComponent } from './fund-edit-classification.component';

describe('FundEditClassificationComponent', () => {
  let component: FundEditClassificationComponent;
  let fixture: ComponentFixture<FundEditClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundEditClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundEditClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
