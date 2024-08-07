import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpoproductComponent } from './addpoproduct.component';

describe('AddpoproductComponent', () => {
  let component: AddpoproductComponent;
  let fixture: ComponentFixture<AddpoproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpoproductComponent]
    });
    fixture = TestBed.createComponent(AddpoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
