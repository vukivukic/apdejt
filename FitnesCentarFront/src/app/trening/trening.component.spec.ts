import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreningComponent } from './trening.component';

describe('TreningComponent', () => {
  let component: TreningComponent;
  let fixture: ComponentFixture<TreningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreningComponent]
    });
    fixture = TestBed.createComponent(TreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
