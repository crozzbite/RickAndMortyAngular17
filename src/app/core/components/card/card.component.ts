import { Character, CharacterResults } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { RickandmortyItemsComponent } from '../rickandmorty-items/rickandmorty-items.component';
import { ErrorMessageComponentComponent } from '../error-message-component/error-message-component.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AsyncPipe,RickandmortyItemsComponent, ErrorMessageComponentComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public RnMCharacteResults$! :Observable<CharacterResults>;
  constructor(private service : CharacterService){}

  ngOnInit() : void {

    this.RnMCharacteResults$ = this.service.getCharacterList();
    
  }

}
