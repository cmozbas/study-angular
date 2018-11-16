import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDisplayComponent } from './fund-display.component';

describe('ProductDisplayComponent', () => {
  let component: FundDisplayComponent;
  let fixture: ComponentFixture<FundDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
