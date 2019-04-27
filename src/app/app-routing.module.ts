import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component'
import { MoviesComponent } from './movies/movies.component'
import { MainComponent } from './main/main.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'main', component: MainComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
