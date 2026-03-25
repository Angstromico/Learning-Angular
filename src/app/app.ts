import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>This is a p</p>

    <router-outlet />
  `,
  styles: [
    `
      h1 {
        color: blue;
      }
      p {
        font-weight: 700;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
