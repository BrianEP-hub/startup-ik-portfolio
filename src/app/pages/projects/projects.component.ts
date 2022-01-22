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
    description:
      'Self made crypto tracker built with reactjs, axios, antd and reduxjs toolkit',
    repo: 'https://github.com/BrianEP-hub/cryptoapp',
  },
  {
    name: 'Weather API',
    link: '',
    description:
      'Web scraper API for weather news buildt with axios, cheerio, express and nodemon',
    repo: 'https://github.com/BrianEP-hub/github-weather',
  },
  {
    name: 'Games dashboard',
    link: 'https://brianep-hub-angular-dashboard.netlify.app/',
    description: 'Games display built with Angular 12.2.7 and angular material',
    repo: 'https://github.com/BrianEP-hub/angular-dashboard-app',
  },
  {
    name: 'SpaceX microsite',
    link: 'https://brianb.no/space/index.html',
    description:
      'First semester Exam project, SpaceX microsite with launch details and countdowntimer for next launch of spaceshuttle',
    repo: 'https://github.com/BrianEP-hub/Project-Exam',
  },
];

interface Projects {
  name: string;
  link: string;
  description: string;
  repo: string;
}
