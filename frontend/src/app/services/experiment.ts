import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiment } from '../models/experiment.model';

@Injectable({
  providedIn: 'root',
})
export class ExperimentService {
  private apiUrl = 'http://localhost:3000/api/experiments';

  constructor(private http: HttpClient) { }

  getExperiments(): Observable<Experiment[]> {
    return this.http.get<Experiment[]>(this.apiUrl);
  }

  getExperiment(id: string): Observable<Experiment> {
    return this.http.get<Experiment>(`${this.apiUrl}/${id}`);
  }

  createExperiment(experiment: Experiment): Observable<Experiment> {
    return this.http.post<Experiment>(this.apiUrl, experiment);
  }

  updateExperiment(id: string, experiment: Experiment): Observable<Experiment> {
    return this.http.put<Experiment>(`${this.apiUrl}/${id}`, experiment);
  }

  deleteExperiment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
