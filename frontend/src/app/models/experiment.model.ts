export interface Experiment {
  _id?: string;
  title: string;
  topic: string;
  date: Date | string;
  hypothesis?: string;
  materials?: string;
  procedure?: string;
  observations?: string;
  results?: string;
  conclusion?: string;
  status: 'Draft' | 'Ongoing' | 'Completed';
  createdAt?: string;
  updatedAt?: string;
}
