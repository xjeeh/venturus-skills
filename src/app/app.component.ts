import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Roles, SeniorityLevels } from './shared/models/employee.model';
import { Skills } from './shared/models/skill.model';
import { Companies } from './shared/models/company.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  objectKeys = Object.keys;

  profiles =
    {
      executiveManager: {
        id: Roles.executiveManager.id,
        description: Roles.executiveManager.description,
        color: Roles.executiveManager.color,
        employees: [
          {
            image: '/assets/images/anselmo.jpg',
            name: 'Anselmo Junior',
            seniority: SeniorityLevels.gerente,
            allocation: [Companies.Gemalto],
            skills: [],
          }
        ]
      },
      projectManager: {
        id: Roles.projectManager.id,
        description: Roles.projectManager.description,
        color: Roles.projectManager.color,
        employees: [
          {
            image: '/assets/images/camera.jpg',
            name: 'Marcelo Camera',
            seniority: SeniorityLevels.gerente,
            allocation: [Companies.Gemalto],
            skills: [],
          }
        ]
      },
      developer: {
        id: Roles.developer.id,
        description: Roles.developer.description,
        color: Roles.developer.color,
        employees: [
          {
            image: '/assets/images/jeff.png',
            name: 'Jefferson Santos',
            seniority: SeniorityLevels.pleno,
            allocation: [Companies.Gemalto],
            skills: []
          },
          {
            image: '/assets/images/iza.jpg',
            name: 'Izabela Lima',
            seniority: SeniorityLevels.pleno,
            allocation: [Companies.Gemalto],
            skills: [],
          },
          {
            image: '/assets/images/frau.jpg',
            name: 'Marcelo Frau',
            seniority: SeniorityLevels.senior,
            allocation: [Companies.S2, Companies.Gemalto],
            skills: [],
          },
          {
            image: '/assets/images/aline.png',
            name: 'Aline Bossi',
            seniority: SeniorityLevels.pleno,
            allocation: [Companies.CGO, Companies.MercadoBitcoin],
            skills: [],
          }
        ]
      },
      designer: {
        id: Roles.designer.id,
        description: Roles.designer.description,
        color: Roles.designer.color,
        employees: [
          {
            image: '/assets/images/camila.jpg',
            name: 'Camila Borges',
            seniority: SeniorityLevels.junior,
            allocation: [Companies.Gemalto],
            skills: [],
          }
        ]
      },
      tester: {
        id: Roles.tester.id,
        description: Roles.tester.description,
        color: Roles.tester.color,
        employees: [
          {
            image: '/assets/images/naga.jpg',
            name: 'Renato Nagashima',
            seniority: SeniorityLevels.senior,
            allocation: [Companies.Gemalto],
            skills: [],
          },
          {
            image: '/assets/images/livia.jpg',
            name: 'Lívia Fagali',
            seniority: SeniorityLevels.master,
            allocation: [Companies.Gemalto],
            skills: [],
          }
        ]
      },
      requirementsAnalyst: {
        id: Roles.requirementsAnalyst.id,
        description: Roles.requirementsAnalyst.description,
        color: Roles.requirementsAnalyst.color,
        employees: [
          {
            image: '/assets/images/fabi.jpg',
            name: 'Fabiana Peres',
            seniority: SeniorityLevels.pleno,
            allocation: [Companies.Gemalto],
            skills: [],
          }
        ]
      }
    };
}
