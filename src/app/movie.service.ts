import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //Returns first page of Star Wars movies
  private moviesURL = 'https://swapi.co/api/films/';

  constructor( private http: HttpClient ) {  
  }

  getMovies(): Observable<Movie[]> {
    //We use HttpClient to get movies from the API
    return this.http.get<Movie[]>(this.moviesURL)
      .pipe(
        //Star Wars API returns 
        //Used any to avoid warning over unserialized property
        map((movies:any) => movies.results)
      )
  }

  getMovie(id: number): Observable<Movie> {
    //We use HttpClient to get movies from the API
    return this.http.get<Movie>(this.moviesURL + id)
      .pipe(
        //Star Wars API returns 
        //Used any to avoid warning over unserialized property
        map((movie:any) => movie)
      )
  }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(this.moviesURL+"?search="+term)
      .pipe(
        //Star Wars API returns 
        //Used any to avoid warning over unserialized property
        map((movies:any) => movies.results)
      )
  }
}
