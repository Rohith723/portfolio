import { Component } from '@angular/core';

interface Highlight {
  icon: string;
  title: string;
  description: string;
  iconClass: string;
  accentClass: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly highlights: Highlight[] = [
    {
      icon: 'psychology',
      title: 'Problem Solving Mindset',
      description: 'Approaching every challenge as an opportunity to optimize performance and enhance system reliability.',
      iconClass: 'text-primary',
      accentClass: 'border-l-primary',
    },
    {
      icon: 'verified_user',
      title: 'Security First',
      description: 'Implementing enterprise-grade authentication and authorization using JWT and modern security standards.',
      iconClass: 'text-secondary',
      accentClass: 'border-l-secondary',
    },
  ];

  readonly principles: string[] = ['Clean Architecture', 'SOLID Principles', 'Agile & Scrum'];
}