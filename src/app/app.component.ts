import { Component } from '@angular/core';
import { CardComponent } from './core/components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RickAndMortyAngular17';
}
