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
    const url: string = `${environment.URLBASE}location?limit=10`;
    console.log(url);
    return this.http.get<CharacterResults>(`${environment.URLBASE}character`);
  }
}
  // este es un ejercicio de code wars que resolvi, nada que ver pero aqui lo puse , hay que moverlo a otro lado 
//   codewar() {
//     const s = 'a()b0cD()eR';

//     const count = [...s].reduce((acumulator, caracter, index, s): number => {
//       const regex = /[abdegopq069DOPQR]/;
//       const ragex2 = /[%&B8]/;

//       if (regex.test(caracter) || (caracter === '(' && s[index + 1] === ')')) {
//         acumulator += 1;
//       } else if (ragex2.test(caracter)) {
//         acumulator += 2;
//       }
//       return acumulator;
//     },0);
//   }

