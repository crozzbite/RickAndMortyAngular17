import { CharacterResults } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { AsyncPipe } from '@angular/common';
import {  catchError, EMPTY, Observable } from 'rxjs';
import { RickandmortyItemsComponent } from '../rickandmorty-items/rickandmorty-items.component';
import { ErrorMessageComponentComponent } from '../error-message-component/error-message-component.component';
import { error } from 'console';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AsyncPipe,RickandmortyItemsComponent, ErrorMessageComponentComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public RnMCharacteResults$! :Observable<CharacterResults>;
  public errorMessage! :string;
  constructor(private service : CharacterService){}

  ngOnInit() : void {

    this.RnMCharacteResults$ = this.service.getCharacterList()
    .pipe(catchError((error: string) =>{
      this.errorMessage = error;
      return EMPTY; // EMPTY ES POR QUE ESTO REGRESA UN OBSERVABLE VACIO PARA COMPLETAR EL CICLO DE LA FUNCION SI NO RESIVE NADA 
    }))
  }
}
