import { createReducer, on } from '@ngrx/store';
import { searchMovie } from './movie.actions';
import { state } from '@angular/animations';

export const initialState = '';

export const movieReducer = createReducer(
  initialState,
  on(searchMovie, (state, action) => action.payload)
);
