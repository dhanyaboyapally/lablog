import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentDetail } from './experiment-detail';

describe('ExperimentDetail', () => {
  let component: ExperimentDetail;
  let fixture: ComponentFixture<ExperimentDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperimentDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
