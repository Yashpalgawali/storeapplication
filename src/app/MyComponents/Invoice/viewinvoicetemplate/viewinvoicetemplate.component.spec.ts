import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinvoicetemplateComponent } from './viewinvoicetemplate.component';

describe('ViewinvoicetemplateComponent', () => {
  let component: ViewinvoicetemplateComponent;
  let fixture: ComponentFixture<ViewinvoicetemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewinvoicetemplateComponent]
    });
    fixture = TestBed.createComponent(ViewinvoicetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
