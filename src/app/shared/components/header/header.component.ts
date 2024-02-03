import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, NgStyle, RouterLinkWithHref, RouterLinkActive]
})
export class HeaderComponent {

  showNavMenu: boolean = false;

  toggleNavMenu() {
    this.showNavMenu = !this.showNavMenu;
  }

  closeNavMenu() {
    this.showNavMenu = false;
  }

}
