import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, Header],
  template: `
    <app-header />

    <main>
      <section>
        <app-home [grettings]="title()" />
      </section>
    </main>

    <router-outlet />
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('Hello from Angular');
}
