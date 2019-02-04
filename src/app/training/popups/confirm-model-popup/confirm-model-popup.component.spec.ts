import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModelPopupComponent } from './confirm-model-popup.component';

describe('ConfirmModelPopupComponent', () => {
  let component: ConfirmModelPopupComponent;
  let fixture: ComponentFixture<ConfirmModelPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmModelPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
