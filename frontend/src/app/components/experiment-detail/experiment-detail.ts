import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExperimentService } from '../../services/experiment';
import { Experiment } from '../../models/experiment.model';
import { StatusBadgeComponent } from '../status-badge/status-badge';

@Component({
  selector: 'app-experiment-detail',
  imports: [CommonModule, RouterLink, DatePipe, StatusBadgeComponent],
  templateUrl: './experiment-detail.html',
  styleUrls: ['./experiment-detail.css']
})
export class ExperimentDetailComponent implements OnInit {
  experiment: Experiment | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private experimentService: ExperimentService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.experimentService.getExperiment(id).subscribe({
        next: (data) => {
          this.experiment = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Could not load the experiment notebook.';
          this.loading = false;
        }
      });
    }
  }

  onDelete() {
    if (this.experiment && confirm('Are you sure you want to delete this notebook page?')) {
      this.experimentService.deleteExperiment(this.experiment._id as string).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
