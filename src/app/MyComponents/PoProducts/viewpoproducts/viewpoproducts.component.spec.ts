import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpoproductsComponent } from './viewpoproducts.component';

describe('ViewpoproductsComponent', () => {
  let component: ViewpoproductsComponent;
  let fixture: ComponentFixture<ViewpoproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpoproductsComponent]
    });
    fixture = TestBed.createComponent(ViewpoproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
