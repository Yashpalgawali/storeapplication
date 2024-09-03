import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpartyComponent } from './viewparty.component';

describe('ViewpartyComponent', () => {
  let component: ViewpartyComponent;
  let fixture: ComponentFixture<ViewpartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpartyComponent]
    });
    fixture = TestBed.createComponent(ViewpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
