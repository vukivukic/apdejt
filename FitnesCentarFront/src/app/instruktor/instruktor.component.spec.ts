import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruktorComponent } from './instruktor.component';

describe('InstruktorComponent', () => {
  let component: InstruktorComponent;
  let fixture: ComponentFixture<InstruktorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstruktorComponent]
    });
    fixture = TestBed.createComponent(InstruktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
