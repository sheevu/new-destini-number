
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  focus: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  category: 'Business' | 'Career' | 'Academic';
}

export type Page = 'home' | 'about' | 'services' | 'contact' | 'calculator';
