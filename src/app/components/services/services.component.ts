import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  service = SERVICE_DATA;
  constructor() {}

  ngOnInit(): void {}
}
const SERVICE_DATA: Services[] = [
  {
    service: 'Web design',
    description:
      'I can help you design and build a website, quick and easy. I use tools that give you as a customer the best control of the content',
    icon: 'web',
  },
  {
    service: 'Photography',
    description:
      'Need some photos taken for your site, or in need of a hobby photographer? I can help you take semi professional photographys, either it is for an album cover, or it is for a bigger arrangement',
    icon: 'camera',
  },
  {
    service: 'Content writing',
    description:
      'Need content for your site? Give me a brief description of what the site goal is, and what it is you wish to accomplish.',
    icon: 'notes',
  },
  {
    service: 'Video editing',
    description:
      'I have some experience in video editing, all though not much but I can do the basics of cutting off content where needed and adding some small effects to scenes',
    icon: 'videocam',
  },
];

interface Services {
  service: string;
  description: string;
  icon: string;
}
