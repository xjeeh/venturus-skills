import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  constructor() { }

  roleColors = {
    frontend: '#22a7f0',
    backend: '#f03434',
    fullstack: '#7befb2',
    tester: '#fad859'
  };

  @Input() profile;

  getAllocations(profile) {
    return profile.join(', ');
  }

  getRoleColor(role) {
    return this.roleColors[role];
  }

}
