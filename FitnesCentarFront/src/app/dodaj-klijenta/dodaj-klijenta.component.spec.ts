import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajKlijentaComponent } from './dodaj-klijenta.component';

describe('DodajKlijentaComponent', () => {
  let component: DodajKlijentaComponent;
  let fixture: ComponentFixture<DodajKlijentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodajKlijentaComponent]
    });
    fixture = TestBed.createComponent(DodajKlijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
