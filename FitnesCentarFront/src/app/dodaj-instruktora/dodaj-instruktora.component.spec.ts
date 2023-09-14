import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInstruktoraComponent } from './dodaj-instruktora.component';

describe('DodajInstruktoraComponent', () => {
  let component: DodajInstruktoraComponent;
  let fixture: ComponentFixture<DodajInstruktoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodajInstruktoraComponent]
    });
    fixture = TestBed.createComponent(DodajInstruktoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
