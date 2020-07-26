import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersNewComponent } from './offers-new.component';

describe('OffersNewComponent', () => {
  let component: OffersNewComponent;
  let fixture: ComponentFixture<OffersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
