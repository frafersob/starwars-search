import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  //Returns first page of Star Wars characters
  private charactersURL = 'https://swapi.co/api/people/';

  constructor( private http: HttpClient ) {  
  }

  getCharacters(): Observable<Character[]> {
    //We use HttpClient to get characters from the API
    return this.http.get<Character[]>(this.charactersURL)
      .pipe(
        //Star Wars API returns 
        //Used any to avoid warning over unserialized property
        map((characters:any) => characters.results)
      )
  }
}
