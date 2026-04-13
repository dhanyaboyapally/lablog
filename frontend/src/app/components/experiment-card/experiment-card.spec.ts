import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentCard } from './experiment-card';

describe('ExperimentCard', () => {
  let component: ExperimentCard;
  let fixture: ComponentFixture<ExperimentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperimentCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
