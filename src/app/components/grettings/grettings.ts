import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grettings',
  imports: [],
  templateUrl: './grettings.html',
  styleUrl: './grettings.scss',
})
export class Grettings {
  @Input() grettings = 'HelloWorld';
}
