export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
}

export interface JobFiltersType {
  location: string;
  type: string;
  salaryMin: string;
}
