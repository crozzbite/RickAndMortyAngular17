import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-rickandmorty-items',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './rickandmorty-items.component.html',
  styleUrl: './rickandmorty-items.component.scss'
})
export class RickandmortyItemsComponent {
  @Input() RnMInfo!: Character;

}
