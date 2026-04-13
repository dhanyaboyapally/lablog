import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Experiment } from '../../models/experiment.model';
import { StatusBadgeComponent } from '../status-badge/status-badge';

@Component({
  selector: 'app-experiment-card',
  imports: [RouterLink, DatePipe, StatusBadgeComponent],
  templateUrl: './experiment-card.html',
  styleUrls: ['./experiment-card.css'],
})
export class ExperimentCardComponent {
  @Input() experiment!: Experiment;
  @Output() delete = new EventEmitter<string>();

  onDelete(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    if(confirm('Are you sure you want to delete this specific experiment?')) {
      this.delete.emit(this.experiment._id);
    }
  }
}
