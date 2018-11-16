import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareClassComponent } from './share-class.component';

describe('ShareClassComponent', () => {
  let component: ShareClassComponent;
  let fixture: ComponentFixture<ShareClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
