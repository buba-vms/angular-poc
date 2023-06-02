import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchMovie } from '../ngrx/movie.actions';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  filme: string = '';
  movie$: Observable<string>;
  constructor(private store: Store<{ movie: string }>) {
    this.movie$ = store.select('movie');
  }

  searchMovie(movieTitle: string) {
    const payload = movieTitle;
    this.store.dispatch(searchMovie({ payload }));
  }
}
