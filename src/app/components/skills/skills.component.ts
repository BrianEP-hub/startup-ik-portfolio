import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = SKILLS_DATA;
  constructor() {}

  ngOnInit(): void {}
}

const SKILLS_DATA: Skills[] = [
  { name: 'Angular', value: 70 },
  { name: 'React', value: 80 },
  { name: 'C#', value: 40 },
];

interface Skills {
  name: string;
  value: number;
}
