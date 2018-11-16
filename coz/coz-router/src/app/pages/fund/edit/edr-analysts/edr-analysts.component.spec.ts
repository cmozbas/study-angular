import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdrAnalystsComponent } from './edr-analysts.component';

describe('EdrAnalystsComponent', () => {
  let component: EdrAnalystsComponent;
  let fixture: ComponentFixture<EdrAnalystsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdrAnalystsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdrAnalystsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
