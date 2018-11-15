import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketLogoComponent } from './basket-logo.component';

describe('BasketLogoComponent', () => {
  let component: BasketLogoComponent;
  let fixture: ComponentFixture<BasketLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
