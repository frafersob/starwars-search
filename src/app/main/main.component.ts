import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  characters: Character[] = [];
  movies: Movie[] = [];
 
  constructor(private characterService: CharacterService,
              private movieService: MovieService,
              private historyService: HistoryService) { }
 
  ngOnInit() {
    this.getCharacters();
    this.getMovies();
    this.historyService.add('Main Page');
  }
 
  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters.slice(0, 4));
  }

  getMovies(): void {
    this.movieService.getMovies()
      //API doesn't return movies in order, unlike characters, so we order them manually
      .subscribe(movies => {
          this.movies.push(movies[0]);
          this.movies.push(movies[5]);
          this.movies.push(movies[4]);
          this.movies.push(movies[2]);
          this.movies.push(movies[1]);
          this.movies.push(movies[3]);
          this.movies.push(movies[6]);
        })
  }

}
