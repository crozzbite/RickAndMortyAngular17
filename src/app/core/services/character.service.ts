import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterResults } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url : string = 'https://rickandmortyapi.com/api/';

  constructor( private http : HttpClient ) { }

getCharacterList() :Observable<CharacterResults> {

  return this.http.get<CharacterResults>(`${this.url+'character'}`);

  }
}
