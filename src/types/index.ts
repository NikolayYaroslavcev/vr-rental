export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhatIsIncluded {
  id: string;
  name: string;
  description: string;
  icon: string;
}
