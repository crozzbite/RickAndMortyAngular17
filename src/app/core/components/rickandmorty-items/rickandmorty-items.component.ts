import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rickandmorty-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rickandmorty-items.component.html',
  styleUrl: './rickandmorty-items.component.scss'
})
export class RickandmortyItemsComponent {
  @Input() RnMInfo!: Character;

}
