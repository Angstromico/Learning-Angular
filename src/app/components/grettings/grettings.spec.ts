import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grettings } from './grettings';

describe('Grettings', () => {
  let component: Grettings;
  let fixture: ComponentFixture<Grettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grettings],
    }).compileComponents();

    fixture = TestBed.createComponent(Grettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
