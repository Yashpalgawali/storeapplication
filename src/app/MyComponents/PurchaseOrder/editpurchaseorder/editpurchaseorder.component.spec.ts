import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpurchaseorderComponent } from './editpurchaseorder.component';

describe('EditpurchaseorderComponent', () => {
  let component: EditpurchaseorderComponent;
  let fixture: ComponentFixture<EditpurchaseorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditpurchaseorderComponent]
    });
    fixture = TestBed.createComponent(EditpurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
