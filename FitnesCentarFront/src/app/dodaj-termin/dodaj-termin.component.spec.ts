import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajTerminComponent } from './dodaj-termin.component';

describe('DodajTerminComponent', () => {
  let component: DodajTerminComponent;
  let fixture: ComponentFixture<DodajTerminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodajTerminComponent]
    });
    fixture = TestBed.createComponent(DodajTerminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
