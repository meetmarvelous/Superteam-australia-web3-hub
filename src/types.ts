export interface Member {
  id: string;
  name: string;
  role: string;
  skills: string[];
  avatar: string;
  twitter?: string;
  github?: string;
  company?: string;
  isCore?: boolean;
  bio?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  lumaUrl: string;
  image: string;
  type: 'upcoming' | 'past';
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Project {
  name: string;
  logo: string;
  url: string;
}
