import { environment } from './../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResults } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  constructor(private http: HttpClient) {}

  getCharacterList(): Observable<CharacterResults> {
    return this.http.get<CharacterResults>(`${environment.URLBASE + 'character'}`);
  }
}
