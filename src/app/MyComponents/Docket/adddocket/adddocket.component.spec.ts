import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddocketComponent } from './adddocket.component';

describe('AdddocketComponent', () => {
  let component: AdddocketComponent;
  let fixture: ComponentFixture<AdddocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddocketComponent]
    });
    fixture = TestBed.createComponent(AdddocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
