export interface Opportunity {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  experience: string;
  salary: string;
}