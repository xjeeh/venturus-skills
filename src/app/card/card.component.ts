import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Roles, SeniorityLevels } from './../shared/models/employee.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  constructor() { }

  @Input() profile;
  @Input() id;
  @Input() description;
  @Input() color;

  getSeniorityIcon(seniority) {
    switch (seniority.id) {
      case SeniorityLevels.estagiario.id: {
        return `<i class="fas fa-baby"></i>`;
      }
      case SeniorityLevels.junior.id: {
        return `<i class="fas fa-chevron-right"></i>`;
      }
      case SeniorityLevels.pleno.id: {
        return `<i class="fas fa-chevron-right"></i>`.repeat(2);
      }
      case SeniorityLevels.senior.id: {
        return `<i class="fas fa-chevron-right"></i>`.repeat(3);
      }
      case SeniorityLevels.master.id: {
        return `<b>|</b>` + `<i class="fas fa-chevron-right"></i>`.repeat(3);
      }
      case SeniorityLevels.gerente.id: {
        return `<i class="fas fa-star"></i>`;
      }
    }
  }

  getAllocation(allocation) {
    return allocation.map(e => e.description).join(', ');
  }

  getSkills(skills) {
    return skills.map(e => e.description).join(', ');
  }
}
