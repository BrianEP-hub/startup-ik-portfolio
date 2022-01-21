import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS_DATA;
  constructor() {}

  ngOnInit(): void {}
}

const PROJECTS_DATA: Projects[] = [
  {
    name: 'Crypto app',
    link: 'https://brianep-hub-crypto-tracker.netlify.app/',
    description: 'Self made crypto tracker',
    repo: 'https://github.com/BrianEP-hub/cryptoapp',
  },
  {
    name: 'Weather API',
    link: '',
    description: 'Web scraper API for weather news',
    repo: 'https://github.com/BrianEP-hub/github-weather',
  },
];

interface Projects {
  name: string;
  link: string;
  description: string;
  repo: string;
}
