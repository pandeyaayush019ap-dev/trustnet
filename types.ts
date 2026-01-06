
export interface Step {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ModelDetail {
  title: string;
  subtitle: string;
  points: string[];
  icon: string;
}

export interface Section {
  id: string;
  label: string;
}
