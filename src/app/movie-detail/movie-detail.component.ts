import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService }  from '../movie.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getMovie();
    //Check if this is the full details page or being called from the All Movies page
    if(this.route.snapshot.paramMap.get('id')){
      this.historyService.add('Movie Details of Movie ' + this.route.snapshot.paramMap.get('id'))
    };
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }
}
