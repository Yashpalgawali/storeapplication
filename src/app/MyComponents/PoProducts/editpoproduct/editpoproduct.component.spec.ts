import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpoproductComponent } from './editpoproduct.component';

describe('EditpoproductComponent', () => {
  let component: EditpoproductComponent;
  let fixture: ComponentFixture<EditpoproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditpoproductComponent]
    });
    fixture = TestBed.createComponent(EditpoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
