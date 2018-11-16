import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundEditGeneralComponent } from './fund-edit-general.component';

describe('FundEditGeneralComponent', () => {
  let component: FundEditGeneralComponent;
  let fixture: ComponentFixture<FundEditGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundEditGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundEditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
