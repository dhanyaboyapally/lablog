import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentForm } from './experiment-form';

describe('ExperimentForm', () => {
  let component: ExperimentForm;
  let fixture: ComponentFixture<ExperimentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperimentForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
