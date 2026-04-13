import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ExperimentFormComponent } from './components/experiment-form/experiment-form';
import { ExperimentDetailComponent } from './components/experiment-detail/experiment-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'experiment/new', component: ExperimentFormComponent },
  { path: 'experiment/:id', component: ExperimentDetailComponent },
  { path: 'experiment/:id/edit', component: ExperimentFormComponent },
  { path: '**', redirectTo: '' }
];
