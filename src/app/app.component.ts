import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Roles, SeniorityLevels, Skills } from './shared/models/employee.model';
import { Companies } from './shared/models/company.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  objectKeys = Object.keys;

  filters = {
    companies: '',
    roles: '',
    skills: ''
  };

  companies = Companies;
  roles = Roles;
  skills = Skills;

  profiles =
    Object.freeze(
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
              allocation: [Companies.gemalto, Companies.s2, Companies.ingenico],
              skills: [
                { skill: Skills.gestao, score: 5 },
                { skill: Skills.prospeccao, score: 4 },
              ],
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
              allocation: [Companies.gemalto, Companies.canon],
              skills: [
                { skill: Skills.scrum, score: 5 },
                { skill: Skills.agile, score: 4 },
                { skill: Skills.gestao, score: 5 },
                { skill: Skills.prospeccao, score: 3 }],
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
              allocation: [Companies.gemalto],
              skills: [
                { skill: Skills.angular, score: 5 },
                { skill: Skills.react, score: 3 },
                { skill: Skills.angularjs, score: 4 },
                { skill: Skills.css, score: 5 },
                { skill: Skills.javascript, score: 4 }]
            },
            {
              image: '/assets/images/iza.jpg',
              name: 'Izabela Lima',
              seniority: SeniorityLevels.pleno,
              allocation: [Companies.gemalto],
              skills: [
                { skill: Skills.angularjs, score: 5 },
                { skill: Skills.css, score: 4 },
                { skill: Skills.javascript, score: 4 }],
            },
            {
              image: '/assets/images/frau.jpg',
              name: 'Marcelo Frau',
              seniority: SeniorityLevels.senior,
              allocation: [Companies.gemalto],
              skills: [
                { skill: Skills.javascript, score: 3 },
                { skill: Skills.java, score: 4 },
                { skill: Skills.cicd, score: 5 },
                { skill: Skills.jenkins, score: 5 }
              ]
            },
            {
              image: '/assets/images/aline.png',
              name: 'Aline Bossi',
              seniority: SeniorityLevels.pleno,
              allocation: [Companies.gemalto],
              skills: [
                { skill: Skills.angularjs, score: 5 },
                { skill: Skills.css, score: 4 },
                { skill: Skills.javascript, score: 4 }],
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
              allocation: [Companies.gemalto],
              skills: [
                { skill: Skills.angular, score: 4 },
                { skill: Skills.css, score: 4 },
                { skill: Skills.javascript, score: 4 },
                { skill: Skills.ui, score: 5 },
                { skill: Skills.ux, score: 5 },
                { skill: Skills.prototipacao, score: 5 }],
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
              allocation: [Companies.gemalto, Companies.mercadoBitcoin],
              skills: [
                { skill: Skills.cypress, score: 5 },
                { skill: Skills.selenium, score: 5 },
                { skill: Skills.jest, score: 3 }],
            },
            {
              image: '/assets/images/livia.jpg',
              name: 'Lívia Fagali',
              seniority: SeniorityLevels.master,
              allocation: [Companies.gemalto],
              skills: [
                { skill: Skills.selenium, score: 5 },
                { skill: Skills.jest, score: 4 }],
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
              allocation: [Companies.gemalto, Companies.motorola],
              skills: [
                { skill: Skills.documentacao, score: 5 },
                { skill: Skills.prospeccao, score: 5 }],
            }
          ]
        },
        devOps: {
          id: Roles.devOps.id,
          description: Roles.devOps.description,
          color: Roles.devOps.color,
          employees: [
            {
              image: '/assets/images/nilton.jpg',
              name: 'Nilton Junior',
              seniority: SeniorityLevels.senior,
              allocation: [Companies.gemalto],
              skills: [
                { skill: Skills.cicd, score: 5 },
                { skill: Skills.jenkins, score: 5 },
              ]
            }
          ]
        }
      });

  selectedProfiles = {};

  clearFilters() {
    this.filters = {
      companies: '',
      roles: '',
      skills: ''
    };
    this.applyFilter();
  }

  applyFilter() {
    this.selectedProfiles = JSON.parse(JSON.stringify(this.profiles));

    // Filter Roles
    this.objectKeys(this.selectedProfiles).forEach((group) => {
      if (this.filters.roles !== '') {
        if (group !== this.filters.roles) {
          delete this.selectedProfiles[group];
        }
      }
    });

    // Filter Skills
    this.objectKeys(this.selectedProfiles).forEach((group) => {
      if (this.filters.skills !== '') {

        // Remove employees that dont have the selected skills
        this.selectedProfiles[group].employees.forEach((employee, i) => {
          const hasSkill = employee.skills.some(e => e.skill.id === this.filters.skills).length > 0;

          if (!hasSkill) {
            this.selectedProfiles[group].employees.splice(i, 1);
            console.log(`${JSON.stringify(this.selectedProfiles[group].employees[i])} has the skill`);
          } else {
          }

        });

        // Check if there's any left employee in this group
        if (this.selectedProfiles[group].employees.length <= 0) {
          delete this.selectedProfiles[group];
        }
      }
    });
  }

  ngOnInit() {
    this.selectedProfiles = JSON.parse(JSON.stringify(this.profiles));
  }

}
