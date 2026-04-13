import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.html',
  styleUrls: ['./status-badge.css']
})
export class StatusBadgeComponent {
  @Input() status: 'Draft' | 'Ongoing' | 'Completed' = 'Draft';

  get badgeClass() {
    return {
      'badge': true,
      'badge-draft': this.status === 'Draft',
      'badge-ongoing': this.status === 'Ongoing',
      'badge-completed': this.status === 'Completed'
    };
  }
}
