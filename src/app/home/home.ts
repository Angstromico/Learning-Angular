import { Component, Input } from '@angular/core';
import { Grettings } from '../components/grettings/grettings';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Grettings],
})
export class Home {
  @Input() grettings: string = 'Hello World';
}
