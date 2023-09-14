import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInventarComponent } from './dodaj-inventar.component';

describe('DodajInventarComponent', () => {
  let component: DodajInventarComponent;
  let fixture: ComponentFixture<DodajInventarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodajInventarComponent]
    });
    fixture = TestBed.createComponent(DodajInventarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
