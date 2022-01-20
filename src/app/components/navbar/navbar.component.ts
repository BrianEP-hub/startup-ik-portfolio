import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output()
  readonly darkModeSwitch = new EventEmitter<boolean>();

  constructor() {}

  onDarkModeSwitch({ checked }: MatSlideToggleChange) {
    this.darkModeSwitch.emit(checked);
  }

  ngOnInit(): void {}
}
