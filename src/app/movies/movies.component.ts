import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[]; 

  selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  getmovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this.getmovies();
  }

}
