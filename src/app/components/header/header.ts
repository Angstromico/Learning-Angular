import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = signal('my first angular app');
}
