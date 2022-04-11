import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dev-platform';

  cards=[
    {title: 'Google', imgPath:'google.png', href: 'https://www.google.com' },
    {title: 'Linkedin', imgPath:'linkedin.png', href: 'https://www.linkedin.com' },
    {title: 'Angular', imgPath:'angular.png', href: 'https://angular.io/' },
    {title: 'FreeCodeCamp', imgPath:'freecodecamp.jpg', href: 'https://www.freecodecamp.org/' },   
    {title: 'Dev', imgPath:'dev.png', href: 'https://dev.to/' },
    {title: 'W3Schools', imgPath:'w3s.png', href: 'https://www.w3schools.com/'},
    {title: 'Youtube', imgPath:'youtube.png', href: 'https://www.youtube.com/' },
    {title: 'GitHub', imgPath:'github.png', href: 'https://github.com/' },
    {title: 'Udemy', imgPath:'udemy.jpg', href: 'https://www.udemy.com/' },
   
  ];
}
