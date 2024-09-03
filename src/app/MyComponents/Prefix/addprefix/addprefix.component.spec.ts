import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprefixComponent } from './addprefix.component';

describe('AddprefixComponent', () => {
  let component: AddprefixComponent;
  let fixture: ComponentFixture<AddprefixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprefixComponent]
    });
    fixture = TestBed.createComponent(AddprefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
