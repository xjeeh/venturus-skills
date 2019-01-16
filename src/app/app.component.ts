import { Component, ViewEncapsulation } from '@angular/core';
import { Profile } from './shared/models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  // tslint:disable-next-line:max-line-length
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor condimentum venenatis. Cras sollicitudin maximus erat a viverra. Donec eget viverra sapien. Donec non augue sollicitudin, volutpat urna vitae, vulputate urna. Phasellus nibh metus, accumsan sed eros in, porta cursus mauris. In mi ligula, tincidunt quis dui ac, accumsan porttitor nulla. Phasellus enim turpis, volutpat sit amet dolor porttitor, sodales luctus nunc. Ut orci quam, laoreet vitae metus in, efficitur cursus odio. Nunc semper turpis vel sem malesuada accumsan non laoreet ipsum. Suspendisse finibus dictum tellus ac blandit. Donec eleifend luctus augue, a dapibus turpis lacinia eget. Ut ut erat aliquet, commodo erat eu, fringilla leo. Vivamus ultricies, purus vel mollis dictum, ante nibh volutpat est, et blandit turpis est quis sem.';

  profiles = [
    {
      image: '/assets/images/xjeeh.png',
      name: 'Jefferson Santos',
      title: 'FrontEnd Developer',
      description: this.lorem,
      skills:
      {
        development: {
          front: [{ name: 'Angular', score: 10 }],
          back: [{ name: 'Node.js', score: 6 }],
        },
        design: {
          ui: [{ name: 'typography', score: 2 }],
          ux: [{ name: 'interaction design', score: 3 }],
        }
      },
    },
    {
      image: '/assets/images/marcelofrau.jpg',
      name: 'Marcelo Frau',
      title: 'FullStack Developer',
      description: this.lorem,
      skills:
      {
        development: {
          front: [{ name: 'React', score: 10 }],
          back: [{ name: '.NET', score: 6 }],
        }
      },
    },
    {
      image: '/assets/images/alinebossi.png',
      name: 'Aline Bossi',
      title: 'BackEnd Developer',
      description: this.lorem,
      skills:
      {
        development: {
          front: [{ name: 'PrimeFaces', score: 10 }],
          back: [{ name: 'Java', score: 6 }],
        }
      },
    },
  ];

  details() { }

  select() { }
}
