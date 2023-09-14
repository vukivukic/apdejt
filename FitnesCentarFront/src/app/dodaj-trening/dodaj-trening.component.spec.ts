import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajTreningComponent } from './dodaj-trening.component';

describe('DodajTreningComponent', () => {
  let component: DodajTreningComponent;
  let fixture: ComponentFixture<DodajTreningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodajTreningComponent]
    });
    fixture = TestBed.createComponent(DodajTreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
