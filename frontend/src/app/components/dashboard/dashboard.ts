import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ExperimentService } from '../../services/experiment';
import { Experiment } from '../../models/experiment.model';
import { ExperimentCardComponent } from '../experiment-card/experiment-card';
import { EmptyStateComponent } from '../empty-state/empty-state';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterLink, ExperimentCardComponent, EmptyStateComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  experiments: Experiment[] = [];
  filteredExperiments: Experiment[] = [];
  
  searchTerm: string = '';
  statusFilter: string = 'All';
  loading: boolean = true;

  constructor(private experimentService: ExperimentService) {}

  ngOnInit() {
    this.loadExperiments();
  }

  loadExperiments() {
    this.loading = true;
    this.experimentService.getExperiments().subscribe((data) => {
      this.experiments = data;
      this.applyFilters();
      this.loading = false;
    });
  }

  applyFilters() {
    this.filteredExperiments = this.experiments.filter(exp => {
      const matchesSearch = exp.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                            exp.topic.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'All' || exp.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  onDeleteExperiment(id: string) {
    this.experimentService.deleteExperiment(id).subscribe(() => {
      this.loadExperiments();
    });
  }
}
