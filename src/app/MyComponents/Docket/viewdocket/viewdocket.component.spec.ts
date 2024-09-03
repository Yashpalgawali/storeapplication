import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdocketComponent } from './viewdocket.component';

describe('ViewdocketComponent', () => {
  let component: ViewdocketComponent;
  let fixture: ComponentFixture<ViewdocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdocketComponent]
    });
    fixture = TestBed.createComponent(ViewdocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
