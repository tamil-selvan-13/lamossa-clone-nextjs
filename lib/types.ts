export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
}
