import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { searchMovie } from '../ngrx/movie.actions';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  movie$: Observable<string>;
  constructor(private store: Store<{ movie: string }>) {
    this.movie$ = store.select('movie');
  }

  searchMovie(movieTitle: string) {
    const payload = movieTitle;
    this.store.dispatch(searchMovie({ payload }));
  }
}
