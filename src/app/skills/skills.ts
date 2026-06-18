import { Component } from '@angular/core';

interface SkillCategory {
  icon: string;
  title: string;
  accentClasses: string;
  tags: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly categories: SkillCategory[] = [
    {
      icon: 'dns',
      title: 'Backend',
      accentClasses: 'bg-primary/20 group-hover:bg-primary group-hover:text-on-primary',
      tags: ['.NET Core', 'C#', 'ASP.NET Web API', 'Entity Framework'],
    },
    {
      icon: 'devices',
      title: 'Frontend',
      accentClasses: 'bg-secondary/20 group-hover:bg-secondary group-hover:text-on-secondary',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS'],
    },
    {
      icon: 'database',
      title: 'Database',
      accentClasses: 'bg-tertiary/20 group-hover:bg-tertiary group-hover:text-on-tertiary',
      tags: ['SQL Server', 'PostgreSQL', 'T-SQL'],
    },
    {
      icon: 'construction',
      title: 'Tools',
      accentClasses: 'bg-on-surface-variant/20 group-hover:bg-on-surface-variant group-hover:text-surface',
      tags: ['Git & GitHub', 'Azure DevOps', 'Postman'],
    },
  ];
}