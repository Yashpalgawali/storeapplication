import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchaseorderComponent } from './addpurchaseorder.component';

describe('AddpurchaseorderComponent', () => {
  let component: AddpurchaseorderComponent;
  let fixture: ComponentFixture<AddpurchaseorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpurchaseorderComponent]
    });
    fixture = TestBed.createComponent(AddpurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
