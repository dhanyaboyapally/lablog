import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ExperimentService } from '../../services/experiment';

@Component({
  selector: 'app-experiment-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './experiment-form.html',
  styleUrls: ['./experiment-form.css']
})
export class ExperimentFormComponent implements OnInit {
  experimentForm: FormGroup;
  isEditMode = false;
  experimentId: string | null = null;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private experimentService: ExperimentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.experimentForm = this.fb.group({
      title: ['', Validators.required],
      topic: ['', Validators.required],
      date: [new Date().toISOString().substring(0, 10), Validators.required],
      status: ['Draft', Validators.required],
      hypothesis: [''],
      materials: [''],
      procedure: [''],
      observations: [''],
      results: [''],
      conclusion: ['']
    });
  }

  ngOnInit(): void {
    this.experimentId = this.route.snapshot.paramMap.get('id');
    if (this.experimentId) {
      this.isEditMode = true;
      this.loading = true;
      this.experimentService.getExperiment(this.experimentId).subscribe({
        next: (data) => {
          if (data.date) {
            data.date = new Date(data.date).toISOString().substring(0, 10);
          }
          this.experimentForm.patchValue(data);
          this.loading = false;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load experiment data.';
          this.loading = false;
        }
      });
    }
  }

  onSubmit() {
    if (this.experimentForm.invalid) {
      this.experimentForm.markAllAsTouched();
      return;
    }
    
    this.loading = true;
    const formData = this.experimentForm.value;

    if (this.isEditMode && this.experimentId) {
      this.experimentService.updateExperiment(this.experimentId, formData).subscribe({
        next: () => this.router.navigate(['/experiment', this.experimentId]),
        error: () => {
          this.errorMessage = 'Failed to update experiment.';
          this.loading = false;
        }
      });
    } else {
      this.experimentService.createExperiment(formData).subscribe({
        next: (res) => this.router.navigate(['/dashboard']),
        error: () => {
          this.errorMessage = 'Failed to create experiment.';
          this.loading = false;
        }
      });
    }
  }
}
